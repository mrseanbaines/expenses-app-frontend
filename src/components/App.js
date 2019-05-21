import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Common, StyledListItemButtons } from '../styled-components';
import ExpenseCard from '../containers/ExpenseCard';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import Modal from './Modal';
import ListItemButtons from './ListItemButtons';
import iconPlus from '../images/icon-plus.svg';
import ComponentToggle from './ComponentToggle';

const { Hr, TextInput } = Common;
const { Container, Row, Col, Box } = Grid;
const { Item } = StyledListItemButtons;

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      activeIndex: 0,
      itemsPerPage: 25,
      activeImage: '',
      newCategoryText: '',
      activeCategoryId: '',
    };

    this.categoryInput = React.createRef();
  }

  componentDidMount = () => {
    const { getCategories } = this.props;

    this.getExpenses();
    getCategories();
  };

  componentDidUpdate(prevProps) {
    const { page } = this.props;

    if (prevProps.page !== page) {
      this.getExpenses();
    }
  }

  getExpenses = queryParams => {
    const { getExpenses, setCurrentPage, page } = this.props;
    const { itemsPerPage } = this.state;
    let params = `?limit=${itemsPerPage}&offset=${(page ? page - 1 : 0) * itemsPerPage}`;

    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) => {
        params += `&${key}=${value}`;
      });
    }

    getExpenses({ params });
    setCurrentPage({ currentPage: page || 1 });
  };

  updateSearchQuery = e => {
    const { value } = e.target;

    this.setState({
      searchQuery: value,
    });

    this.getExpenses(value && { search: value });
  };

  searchCriteria = expense => {
    const { activeCategoryId } = this.state;
    let categoryMatch = true;

    if (activeCategoryId) {
      categoryMatch = expense.category && expense.category.id === activeCategoryId;
    }

    return categoryMatch;
  };

  updateActiveIndex = activeIndex => {
    this.setState({ activeIndex });
  };

  updateActiveImage = activeImage => {
    this.setState({ activeImage });
  };

  updateCategoryValue = e => {
    this.setState({
      newCategoryText: e.target.value,
    });
  };

  setActiveCategory = ({ id }) => {
    this.setState(prevState => ({
      activeCategoryId: prevState.activeCategoryId === id ? '' : id,
    }));
  };

  addCategory = async e => {
    e.preventDefault();
    const { addCategory } = this.props;
    const { newCategoryText: category } = this.state;

    if (!category) return;

    await addCategory({ category });

    this.setState({ newCategoryText: '' });
  };

  render = () => {
    const { expenses, total, currentPage, categories } = this.props;
    const { activeImage, activeIndex, itemsPerPage, searchQuery, newCategoryText, activeCategoryId } = this.state;

    return (
      <Container>
        {activeImage && (
          <Modal closeModal={() => this.updateActiveImage('')}>
            <img src={process.env.API_URL + activeImage} alt="receipt" />
          </Modal>
        )}
        <Row>
          <Col mb={[0, 0, 3]} mt={[2, 2, 3]} width={[1, 4 / 12]}>
            <SearchBar updateSearchQuery={this.updateSearchQuery} searchQuery={searchQuery} />
            <Hr />
            <Box mt={2}>
              <ListItemButtons
                options
                items={categories}
                onClick={this.setActiveCategory}
                activeItem={activeCategoryId}
              />

              <Box mt={1}>
                <form onSubmit={this.addCategory} autoComplete="off">
                  <ComponentToggle>
                    <Item toggleHandler="onClick">
                      <Box mr={2}>
                        <img src={iconPlus} alt="" width="16" height="16" />
                      </Box>
                      Add category
                    </Item>
                    <TextInput
                      toggleHandler="onBlur"
                      name="category"
                      value={newCategoryText}
                      placeholder="Add a category"
                      onChange={this.updateCategoryValue}
                    />
                  </ComponentToggle>
                </form>
              </Box>
            </Box>
          </Col>
          <Col width={[1, 8 / 12]}>
            {expenses.filter(this.searchCriteria).map((expense, i) => (
              <Box key={expense.id} my={[2, 2, 3]}>
                <ExpenseCard
                  {...expense}
                  index={i}
                  activeIndex={activeIndex}
                  updateActiveIndex={this.updateActiveIndex}
                  updateActiveImage={this.updateActiveImage}
                  categories={categories}
                  setActiveCategory={this.setActiveCategory}
                  activeCategoryId={activeCategoryId}
                />
              </Box>
            ))}
          </Col>
        </Row>
        <Box mb={[2, 2, 3]} py={[2, 2, 3]}>
          <Pagination totalItems={total} itemsPerPage={itemsPerPage} currentPage={currentPage} />
        </Box>
      </Container>
    );
  };
}

App.defaultProps = {
  expenses: [],
  categories: [],
  getExpenses: () => {},
  getCategories: () => {},
  page: 0,
  total: 0,
  currentPage: 1,
  setCurrentPage: () => {},
  addCategory: () => {},
};

App.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  getExpenses: PropTypes.func,
  getCategories: PropTypes.func,
  page: PropTypes.number,
  total: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  addCategory: PropTypes.func,
};
