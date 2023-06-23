import {Elements} from '@stripe/react-stripe-js'
import { loadStripe} from '@stripe/stripe-js'
import React from "react";
import "./CartPage.css";
import { useSelector } from "react-redux";
import { Alert, Container, Row } from "react-bootstrap";
import {
  useIncreaseCartProductMutation,
  useDecreaseCartProductMutation,
  useRemoveFromCartMutation,
} from "../servises/appApi";

const stripePromise = loadStripe("pk_test_51NKG61BbcbmUVZms9o2ZsY3ggv1IneGjWN47s8JAeM8Olwt7iekHqFPkW07hHBvS6c04MjNmtzk9mCBT8rj0jhDW001MAHWs7y")

function CartPage() {
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);
  const userCartObj = user.cart;
  let cart = products.filter((product) => userCartObj[product._id] != null);
  const [increaseCart] = useIncreaseCartProductMutation();
  const [decreaseCart] = useDecreaseCartProductMutation();
  const [removeFromCart, {isLoading}] = useRemoveFromCartMutation();
  
  function handleDecrease(product) {
    const quantity = user.cart.count;
    if (quantity <= 0) return alert("Can't proceed");
    decreaseCart(product);
  }
  return (
    <Container style={{ minHeight: "95vh" }} className="cart-container">
      <Row>
        <Col md={7}>
          <h1 className="pt-2 h3">Shopping Cart</h1>
          {cart.length == 0 ? (
            <Alert variant="info">
              Shopping cart is empty. Add products to your cart
            </Alert>
          ) : (
            <Elements stripe ={stripePromise}><CheckoutForm/></Elements>
          )}
        </Col>
        {cart.length > 0 && (
          <>
            <Table responsive="sm" className="cart-table">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {/* loop through cart products */}
                {cart.map((item) => (
                  <tr>
                    <td>&nbsp;</td>
                    <td>
                      {!isLoading && <i
                        className="fa fa-times"
                        style={{ marginRight: 10, cursor: "pointer" }}
                        onClick={() =>
                          removeFromCart({
                            productId: item._id,
                            price: item.price,
                            userId: user._id,
                          })
                        }
                      ></i>}
                      <img
                        src={item.pictures[0].url}
                        style={{ width: 100, height: 100, objectFit: "cover" }}
                      />
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <span className="quantity-indicator">
                        <i
                          className="fa fa-minus-circle"
                          onClick={() =>
                            handleDecrease({
                              productId: item._id,
                              price: item.price,
                              userId: user._id,
                            })
                          }
                        ></i>
                        <span>{user.cart[item._id]}</span>
                        <i
                          className="fa fa-plus-circle"
                          onClick={() =>
                            increaseCart({
                              productId: item._id,
                              price: item.price,
                              userId: user._id,
                            })
                          }
                        ></i>
                      </span>
                    </td>
                    <td>${item.price * user.cart[item._id]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div>
              <h3 className="h4 pt-4">Total: ${user.cart.total}</h3>
            </div>
          </>
        )}
        <Col md={5}></Col>
      </Row>
    </Container>
  );
}

export default CartPage;