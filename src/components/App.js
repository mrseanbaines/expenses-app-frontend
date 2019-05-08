import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Common } from '../styled-components';
import ExpenseCard from '../containers/ExpenseCard';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import Modal from './Modal';

const { Hr } = Common;
const { Container, Row, Col, Box } = Grid;

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      activeIndex: 0,
      itemsPerPage: 25,
      activeImage: '',
    };
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

  getExpenses = () => {
    const { getExpenses, setCurrentPage, page } = this.props;
    const { itemsPerPage } = this.state;
    const params = `?limit=${itemsPerPage}&offset=${(page ? page - 1 : 0) * itemsPerPage}`;

    getExpenses({ params });
    setCurrentPage({ currentPage: page || 1 });
  };

  updateSearchQuery = e => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  searchCriteria = expense => {
    const { searchQuery } = this.state;

    return expense.merchant.toLowerCase().includes(searchQuery.toLowerCase());
  };

  updateActiveIndex = activeIndex => {
    this.setState({ activeIndex });
  };

  updateActiveImage = activeImage => {
    this.setState({ activeImage });
  };

  render = () => {
    const { expenses, total, currentPage, categories } = this.props;
    const { activeImage, activeIndex, itemsPerPage, searchQuery } = this.state;

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
            <ul>
              {categories.map(category => (
                <li>{category}</li>
              ))}
            </ul>
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
};

App.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  categories: PropTypes.arrayOf(PropTypes.string),
  getExpenses: PropTypes.func,
  getCategories: PropTypes.func,
  page: PropTypes.number,
  total: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
};
