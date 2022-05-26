import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "./Modal.jsx";
import { addToCart } from "../redux/actions";
import "../index.css";
import ReactDOM from "react-dom"
import OrderForm from "./OrderForm.jsx";

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.sorted = { name: true, price: true, inStock: true, discount: true };
        this.state = { array: this.array, isModalOpen: false, toOrder: false };
    }

    array = [
        { id: "Xiaomi-Redmi-9A",  name: "Xiaomi Redmi 9A",  price: 597, inStock: 13,  img: "/images/Xiaomi-Redmi-9A.jpg",
      desc: "\n" +
          "Диагональ экрана\t6.53 ″\n" +
          "Оперативная память\t2 Гб\n" +
          "Постоянная память\t32 Гб\n" +
          "Версия операционной системы\tAndroid 10.0\n" +
          "Разрешение камеры\t13 Мп\n" +
          "Кол-во SIM-карт\t2\n" +
          "Емкость аккумулятора\t5000 мАч\n" +
          "Процесс зарядки\tбыстрая зарядка, стандартная зарядка",
      new: true,
      discount: 10,
      weight: 120,
      added: 1
    },

    { id: "Galaxy-a03",       name: "Galaxy a03",       price: 600, inStock: 4,   img: "/images/samsung-galaxy-a03-core.jpg",
      desc: "Диагональ экрана\t6.5 ″\n" +
          "Оперативная память\t2 Гб\n" +
          "Постоянная память\t32 Гб\n" +
          "Версия операционной системы\tAndroid 11.0 (Go)\n" +
          "Разрешение камеры\t8 Мп\n" +
          "Кол-во SIM-карт\t2\n" +
          "Емкость аккумулятора\t5000 мАч\n" +
          "Процесс зарядки\tстандартная зарядка",
      new: true,
      discount: 20,
      weight: 199,
      added: 4
    },

    { id: "Realme-C21Y",      name: "Realme C21Y",      price: 300,  inStock: 50,  img: "/images/Realme-C21Y.jpg",
      desc: "Диагональ экрана\t6.5 ″\n" +
          "Оперативная память\t4 Гб\n" +
          "Постоянная память\t64 Гб\n" +
          "Версия операционной системы\tAndroid 11.0\n" +
          "Дополнительный модуль камеры\tесть, датчик глубины, макрообъектив\n" +
          "Разрешение камеры\t13 Мп\n" +
          "Кол-во SIM-карт\t2\n" +
          "Емкость аккумулятора\t5000 мАч\n" +
          "Процесс зарядки\tстандартная зарядка, обратная зарядка",
      new: false,
      discount: 40,
      weight: 130,
      added: 0
    },

    { id: "Realme-C25s",      name: "Realme C25s",      price: 473,  inStock: 140,   img: "/images/Realme-C25s.jpg",
      desc: "\n" +
          "Диагональ экрана\t6.5 ″\n" +
          "Оперативная память\t4 Гб\n" +
          "Постоянная память\t128 Гб\n" +
          "Версия операционной системы\tAndroid 11.0\n" +
          "Дополнительный модуль камеры\tесть, датчик глубины, макрообъектив\n" +
          "Разрешение камеры\t48 Мп\n" +
          "Кол-во SIM-карт\t2\n" +
          "Емкость аккумулятора\t6000 мАч\n" +
          "Процесс зарядки\tбыстрая зарядка, стандартная зарядка, обратная зарядка",
      new: false,
      discount: 15,
      weight: 250,
      added: 2
    },

    { id: "Vivo-2111",        name: "Vivo 2111",        price: 478, inStock: 0,   img: "/images/Vivo-2111.jpg",
      desc: "Диагональ экрана\t6.51 ″\n" +
          "Оперативная память\t4 Гб\n" +
          "Постоянная память\t64 Гб\n" +
          "Версия операционной системы\tAndroid 11.0\n" +
          "Дополнительный модуль камеры\tесть, макрообъектив\n" +
          "Разрешение камеры\t13 Мп\n" +
          "Кол-во SIM-карт\t2\n" +
          "Емкость аккумулятора\t5000 мАч\n" +
          "Процесс зарядки\tбыстрая зарядка, стандартная зарядка",
      new: false,
      discount: 30,
      weight: 314,
      added: 3
    },

    { id: "Xiaomi-Redmi-10",  name: "Xiaomi Redmi 10",  price: 670,   inStock: 16,  img: "/images/Xiaomi-Redmi-10.jpg",
      desc: "Диагональ экрана\t6.5 ″\n" +
          "Оперативная память\t4 Гб\n" +
          "Постоянная память\t64 Гб\n" +
          "Версия операционной системы\tAndroid 11.0\n" +
          "Дополнительный модуль камеры\tесть, датчик глубины, широкоугольный, макрообъектив\n" +
          "Разрешение камеры\t50 Мп\n" +
          "Кол-во SIM-карт\t2\n" +
          "Емкость аккумулятора\t5000 мАч\n" +
          "Процесс зарядки\tбыстрая зарядка",
      new: false,
      discount: 25,
      weight: 329,
      added: 0
    },

    { id: "Huawei-Y5p",       name: "Huawei Y5p",       price: 555,  inStock: 2,   img: "/images/Huawei-Y5p.jpg",
      desc: "\n" +
          "Диагональ экрана\t5.45 ″\n" +
          "Оперативная память\t2 Гб\n" +
          "Постоянная память\t32 Гб\n" +
          "Версия операционной системы\tAndroid 10.0\n" +
          "Разрешение камеры\t8 Мп\n" +
          "Кол-во SIM-карт\t2\n" +
          "Емкость аккумулятора\t2920 мАч\n" +
          "Процесс зарядки\tстандартная зарядка",
      new: false,
      discount: 5,
      weight: 176,
      added: 0
    },
    ];

    sort(byWhat) {
        let direction = this.sorted[byWhat] ? 1 : -1,
            arrayCopy = [...this.state.array].sort(function (a, b) {
                if (a.new || b.new) return 0;
                if (a[byWhat] > b[byWhat]) {
                    return direction;
                }
                if (a[byWhat] < b[byWhat]) {
                    return direction * -1;
                }
                return 0;
            });
        this.sorted[byWhat] = !this.sorted[byWhat];
        this.setState({ array: arrayCopy });
    }
    sorts() {
        return (
            <div className="sorts">
                <button onClick={() => this.sort("name")}>Name</button>
                <button onClick={() => this.sort("price")}>Price</button>
                <button onClick={() => this.sort("inStock")}>In Stock</button>
                <button onClick={() => this.sort("discount")}>Discount</button>
            </div>
        );
    }
    onClickHandler(item, e) {
        this.props.addToCart(item);
        e.target.disabled = true;
        let newItem = item;
        newItem.inStock-=1;
        for (let i = 0; i < this.state.array.length; i++) {
            if (this.state.array[i] === item)
                this.setState({array: [...this.state.array.slice(0, i), newItem, ...this.state.array.slice(i+1)]})
        }
        this.setState({ isModalOpen: true });
    }
    goods() {
        return this.state.array.map((item) => {
            return (
                <div className="one_good" key={item.id}>

                    <div className="discount">
                        {item.new && <h2>New</h2>}
                        <h2>{item.discount}%</h2>
                    </div>

                    <div className="block">
                        <div>
                            <img src={item.img} alt="" />
                        </div>

                        <div>
                            <h2>{item.name}</h2>

                            <div className="prices">
                                {item.discount && (
                                    <h2>{(item.price * (100 - item.discount)) / 100}$</h2>
                                )}
                                <h3>{item.price}$</h3>
                            </div>

                            <h4>Available: {item.inStock} items</h4>
                            <div>{item.desc}</div>

                            <button
                                className="cart"
                                onClick={(e) => this.onClickHandler(item,e)}
                                disabled={!item.inStock}
                            >Add to cart
                            </button>
                        </div>

                    </div>

                </div>
            );
        });
    }

    closeModal = () => {
        this.setState({ isModalOpen: false })
    }
    toOrder = () => {
        this.setState({ toOrder: true })
    }
    render() {
        return (
            !this.state.toOrder ?
                <>
                    {this.sorts()}
                    <div className="container">
                        {this.goods()}
                    </div>
                    {this.state.isModalOpen && ReactDOM.createPortal(
                        <Modal toCatalog={this.closeModal} toOrder={this.toOrder} />,
                        document.getElementById("portal")
                    )}
                </> : <OrderForm />
        );
    }
}

const mapDispatchToProps = {
    addToCart,
};
export default connect(null, mapDispatchToProps)(Catalog);
