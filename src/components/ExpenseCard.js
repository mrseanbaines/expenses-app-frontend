import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyledExpenseCard, Grid, Common, StyledListItemButtons } from '../styled-components';
import { formatPrice, formatDate } from '../utils';
import iconPlus from '../images/icon-plus.svg';
import ComponentToggle from './ComponentToggle';
import ListItemButtons from './ListItemButtons';

const { Container, User, Merchant, Amount, DateTime, Comment } = StyledExpenseCard;
const { Hr, Button, TextLink, TextInput } = Common;
const { Flex, Box } = Grid;
const { Item, Icon } = StyledListItemButtons;

export default class ExpenseCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      commentText: '',
    };
  }

  addComment = async ({ e, id }) => {
    e.preventDefault();

    const { updateExpense } = this.props;
    const { commentText: comment } = this.state;

    if (!comment || !id) return;

    await updateExpense({ id, comment });

    this.setState({ commentText: '' });
  };

  setCategory = category => {
    const { updateExpense, id } = this.props;

    if (!category) return;

    updateExpense({ category, id });
  };

  removeCategory = () => {
    const { updateExpense, id } = this.props;

    updateExpense({ category: null, id });
  };

  updateComment = e => {
    const commentText = e.target.value;

    this.setState({ commentText });
  };

  uploadReceipt = async ({ e, id }) => {
    e.preventDefault();

    const receipt = e.target.files[0];

    const formData = new FormData();

    formData.append('receipt', receipt);

    const { uploadReceipt } = this.props;
    const response = await uploadReceipt({ id, formData });

    return response;
  };

  render = () => {
    const {
      id,
      user,
      merchant,
      date,
      amount,
      comment,
      receipts,
      category,
      activeIndex,
      index,
      updateActiveIndex,
      updateActiveImage,
      categories,
    } = this.props;

    const { currency, value } = amount;

    const { commentText } = this.state;

    return (
      <Container onClick={() => updateActiveIndex(index)}>
        <Flex justifyContent="space-between">
          <Box mr={3}>
            <img src="./images/user-default.svg" alt="user profile" width="40px" height="40px" />
          </Box>
          <Box flex={1}>
            <User href={`mailto:${user.email}`}>{`${user.first} ${user.last}`}</User>
            <Box mt={2}>
              <Merchant>{merchant}</Merchant>
            </Box>
            <Box mt={2}>
              <DateTime>{formatDate(date)}</DateTime>
            </Box>
            <Box mt={3}>
              {category ? (
                <ComponentToggle>
                  <Item outline>
                    <Icon />
                    {category.name}
                  </Item>
                  <div>
                    <ListItemButtons items={categories} onClick={this.setCategory} activeItem={category.id} />
                    <Box mt={1}>
                      <Item onClick={this.removeCategory}>Remove category</Item>
                    </Box>
                  </div>
                </ComponentToggle>
              ) : (
                <ComponentToggle>
                  <Item outline>
                    <Box mr={2}>
                      <img src={iconPlus} alt="" width="16" height="16" />
                    </Box>
                    Choose category
                  </Item>
                  <div>
                    <ListItemButtons items={categories} onClick={this.setCategory} />
                  </div>
                </ComponentToggle>
              )}
            </Box>
          </Box>
          <Flex flexDirection="column" justifyContent="space-between" alignItems="flex-end" ml={2}>
            <Amount>{formatPrice({ currency, value })}</Amount>
            {receipts.length > 0 && <img src="./images/receipt-icon.svg" alt="receipt" />}
          </Flex>
        </Flex>

        {activeIndex === index && (
          <Fragment>
            <Box my={3}>
              <Hr />
            </Box>

            <form onSubmit={e => this.addComment({ e, id })} autoComplete="off">
              <Flex>
                <Box flex={1} mr={3}>
                  <TextInput
                    onChange={this.updateComment}
                    value={commentText}
                    name="comment"
                    placeholder="Add a comment"
                  />
                </Box>
                <Box>
                  <Button disabled={!!comment} type="submit">
                    Post
                  </Button>
                </Box>
              </Flex>
            </form>

            {comment && (
              <Flex mt={3}>
                <Box mr={2}>
                  <img src="./images/user-default.svg" alt="user profile" width="24px" height="24px" />
                </Box>
                <Comment>
                  <strong>Guest</strong>
                  <Box mt={1}>
                    <p>{comment}</p>
                  </Box>
                </Comment>
              </Flex>
            )}

            {receipts.length === 0 && (
              <Box mt={3}>
                <TextLink as="label">
                  <input
                    id="image-upload"
                    onInput={e => this.uploadReceipt({ e, id })}
                    accept="image/*"
                    type="file"
                    name="receipt"
                  />
                  Upload receipt
                </TextLink>
              </Box>
            )}

            {receipts.length > 0 && (
              <Box mt={3}>
                <TextLink onClick={() => updateActiveImage(receipts[receipts.length - 1].url)}>View receipt</TextLink>
              </Box>
            )}
          </Fragment>
        )}
      </Container>
    );
  };
}

ExpenseCard.defaultProps = {
  updateExpense: () => {},
  uploadReceipt: () => {},
  id: '',
  user: {
    first: '',
    last: '',
    email: '',
  },
  merchant: '',
  date: '',
  amount: {
    value: '',
    currency: '',
  },
  comment: '',
  category: null,
  categories: [],
  receipts: [],
  activeIndex: 0,
  index: 0,
  updateActiveIndex: () => {},
  updateActiveImage: () => {},
};

ExpenseCard.propTypes = {
  updateExpense: PropTypes.func,
  uploadReceipt: PropTypes.func,
  id: PropTypes.string,
  user: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
    email: PropTypes.string,
  }),
  merchant: PropTypes.string,
  date: PropTypes.string,
  amount: PropTypes.shape({
    value: PropTypes.string,
    currency: PropTypes.string,
  }),
  comment: PropTypes.string,
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  receipts: PropTypes.arrayOf(PropTypes.object),
  activeIndex: PropTypes.number,
  index: PropTypes.number,
  updateActiveIndex: PropTypes.func,
  updateActiveImage: PropTypes.func,
};
