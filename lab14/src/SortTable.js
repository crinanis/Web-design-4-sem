import { Component } from "react";

export class SortTable extends Component {
  constructor(props) {
    super(props);
    this.sorted = { name: true, price: true, inStock: true, discount: true };
    this.state = { array: this.goods };
  }

  goods = [
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
      added: 20
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

  styles = {
    td: {
      padding: "10px 20px",
      border: "1px solid",
    },
    table: {
      margin: "100px",
      borderCollapse: "collapse",
    },
  };

  sort(byWhat) {
    let direction = this.sorted[byWhat] ? 1 : -1,
      goodsCopy = [...this.goods].sort(function (a, b) {
        if (a[byWhat] > b[byWhat]) {
          return direction;
        }
        if (a[byWhat] < b[byWhat]) {
          return direction * -1;
        }
        return 0;
      });
    this.sorted[byWhat] = !this.sorted[byWhat];
    this.setState({ array: goodsCopy });
  }

  table() {
    let stringNumber = 0;
    return this.state.array.map((item) => {
      let inStockStyle = {};
      if (+item.inStock < 3) inStockStyle = { background: "yellow" };
      if (+item.inStock === 0) inStockStyle = { background: "red" };
      return (
        <tr key={item.id}>
          <td style={this.styles.td}>{++stringNumber}</td>
          <td style={this.styles.td}>{item.name}</td>
          <td style={this.styles.td}>${item.price}</td>
          <td style={Object.assign({}, this.styles.td, inStockStyle)}>
            {item.inStock}
          </td>
          <td style={this.styles.td}><img src={item.img} style={{ width: "50px" }} alt="" /></td>
          <td style={this.styles.td}>{item.desc}</td>
          <td style={this.styles.td}>{item.new ? "Yes" : "No"}</td>
          <td style={this.styles.td}>{item.discount}%</td>
        </tr>
      );
    });
  }

  head = [
    <tr>
      <td style={this.styles.td}>№</td>
      <td style={this.styles.td}>
        <button className="but" onClick={() => this.sort("name")}>Name</button>
      </td>
      <td style={this.styles.td}>
        <button className="but" onClick={() => this.sort("price")}>Price</button>
      </td>
      <td style={this.styles.td}>
        <button className="but" onClick={() => this.sort("inStock")}>In Stock</button>
      </td>
      <td style={this.styles.td}>Image</td>
      <td style={this.styles.td}>Description</td>
      <td style={this.styles.td}>Is New</td>
      <td style={this.styles.td}>
        <button className="but" onClick={() => this.sort("discount")}>Discount</button>
      </td>
    </tr>,
  ];

  render() {
    return (
      <table style={this.styles.table}>
        <tbody>
          {this.head}
          {this.table()}
        </tbody>
      </table>
    );
  }
}
