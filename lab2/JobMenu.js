import { Component } from "react";

export class SelectJob extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.selected = this.selected.bind(this);
  }

  jobs = [
    { value: "", name: "Выберите" },
    { value: "Programmer", name: "Программист" },
    { value: "Economist", name: "Экономист" },
    { value: "Barber", name: "Барбер" },
    { value: "Designer", name: "Дизайнер" },
    { value: "Lawyer", name: "Юрист" },
  ];

  selected(el) {
    return this.setState({ value: el.target.value });
  }

  render() {
    return (
      <div>
        <select onChange={this.selected}>
          {this.jobs.map((item) => {
            return <option value={item.value}>{item.name}</option>;
          })}
        </select>
        <JobMenu value={this.state.value} />
      </div>
    );
  }
}

class JobMenu extends Component {
  switchCase() {
    let links = [],
      value = this.props.value;

    switch (value) {
      case "Programmer":
        links.push(<a href="https://www.codecademy.com">Codeacademy</a>);
        links.push(<a href="https://www.pluralsight.com/product/skills?utm_term=&pslp=product-skills&aid=7010a000002LZ5aAAG&promo=&utm_source=branded&utm_medium=digital_paid_search_google&utm_campaign=XYZ_EMEA_Brand_E&utm_content=&gclid=CjwKCAiAyPyQBhB6EiwAFUuakk25rdW8dnKNOsYiernjx9dST-2o_Cwp033fOgM0nlc2pUzf-baTsxoCM2sQAvD_BwE">PluralSight</a>);
        links.push(<a href="https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=NEW-AW-PROS-Branded-Search-RU-RUS_._ci__._sl_RUS_._vi__._sd_All_._la_RU_._&tabei=7&utm_term=_._ag_58158836094_._ad_544409449142_._de_c_._dm__._pl__._ti_kwd-310556426868_._li_1001493_._pd__._&gclid=CjwKCAiAyPyQBhB6EiwAFUuaklL8XL3PM7L-uQNlnBkyLOUJ0oe4K2VmGRlO1SqWGmCtct8FSF2w8hoC1BkQAvD_BwE">Udemy</a>);
        links.push(<a href="https://tutsplus.com">Tuts+</a>);
        break;
      case "Economist":
        links.push(<a href="www.imf.org">Международный валютный фонд</a>);
        links.push(<a href="www.wto.org">Сайт Всемирной торговой организации (ВТО)</a>);
        links.push(<a href="http://www.worldbank.org">Сайт всемирного банка</a>);
        break;
      case "Barber":
        links.push(<a href="https://vilkoit.by/products/oborudovanie-dlya-barbershopa/kresla-dlya-barbershopa/?utm_source=google&utm_medium=cpc&utm_term=все%20для%20барбершопа&utm_content=292273422612&utm_campaign=gl-search-exact&gclid=CjwKCAiAyPyQBhB6EiwAFUuaknr5WFsfWpgFHLlGztp-bg6JoCve5_YHSEjnkrEQc2miVLZsS3bXHRoCguYQAvD_BwE">Парикмахерское оборудование</a>);
        links.push(<a href="https://topbarber-academy.by/?gclid=CjwKCAiAyPyQBhB6EiwAFUuakkKdnwNdrDo8RgeZtiyydrP61NjL4Dg5tUG3ZEaGFTWhVcHvZY21qRoCbBUQAvD_BwE">Школа барберов</a>);
        links.push(<a href="https://barbarossa.top/articles/trendy2022/">Тренды мужских стрижек 2022</a>);
        break;
      case "Designer":
        links.push(<a href="Designshack.net">Крутые удачные дизайнерские проекты</a>);
        links.push(<a href="Behance.net">Соцсеть для любителей творчества</a>);
        links.push(<a href="Niice.co">Поисковик со вкусом</a>);
        break;
      case "Lawyer":
        links.push(<a href="https://jurist.by">Профессиональный правовой сайт для юристов</a>);
        links.push(<a href="https://jurisconsult.by">Информационный портал для юриста</a>);
        links.push(<a href="https://vcpi.nlb.by/virtualnye-yuridicheskie-sluzhby-konsultatsii/">Виртуальные юридические службы/консультации</a>);
        break;
    }
    console.log(links);
    return (
      <>
        <h2>Список полезных ссылок:</h2>
        <ul>
          {links.map((item) => {
            return (
              <li>
                {item}
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  render() {
    return <>{this.switchCase()}</>;
  }
}
