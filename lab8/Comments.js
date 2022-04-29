import React from "react";
import { Component } from "react";

export class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: "/avatar/choose.jpg",
      comments: [
        {
          name: "kotik1",
          avatar: "/avatar/1.jpg",
          email: "kotik1@mail.ru",
          message: "Hello world!",
          secretWord: "qwerty",
          date: new Date(),
        },
      ],
      delete: null,
      edit: null,
      info: null,
    };
  }

  avatar = [
    {
      img: "",
      name: "Аватар пользователя",
    },
    {
      img: "/avatar/1.jpg",
      name: "1",
    },
    {
      img: "/avatar/2.jpg",
      name: "2",
    },
    {
      img: "/avatar/3.jpg",
      name: "3",
    },
    {
      img: "/avatar/4.jpg",
      name: "4",
    },
    {
      img: "/avatar/5.jpg",
      name: "5",
    },
  ];

  onSubmit = (e) => {
    e.preventDefault();
    let comment = {
      name: this.name.value,
      avatar: this.state.img,
      email: this.email.value,
      message: this.message.value,
      secretWord: this.secretWord.value,
      date: new Date(),
    };
    this.setState({
      comments: [...this.state.comments, comment],
    });
    this.name.value = null;
    this.email.value = null;
    this.message.value = null;
    this.secretWord.value = null;
    
  };

  //Сами комментарии
  comments() {
    return this.state.comments.map((comment) => {
      return (
        <div className="comment" key={comment.message}>

          <div className="name">Пользователь:   {comment.name}</div>
          <div className="message">Комментарий:   {comment.message}</div>
          <img style={{ height: "150px", width: "150px" }} src={comment.avatar} alt="" />

          <button onClick={() => this.setState({ edit: comment, delete: null, info: null })}>
            Редактировать
          </button>
          {comment === this.state.edit ?
              <CommentsEdit
                  comment={this.state.edit}
                 edit={this.edit}
              />
              : null}

          <button onClick={() => this.setState({ delete: comment, edit: null, info: null })}>
            Удалить
          </button>
          {comment === this.state.delete ? (
              <CommentsDel
                  delete={this.delete}
                  comment={this.state.delete}
              />
          ) : null}

          <button onClick={() => this.setState({ info: comment, edit: null, delete: null })}>
            Информация
          </button>
          {comment === this.state.info ? (
              <CommentsInfo comment={this.state.info} />
          ) : null}
        </div>
      );
    });
  }

  delete = (comment) => {
    for (let i = 0; i < this.state.comments.length; i++) {
      if (this.state.comments[i] === comment) {
        return this.setState(({ comments }) => ({
          comments: [...comments.slice(0, i), ...comments.slice(i + 1)],
          delete: null
        }));
      }
    }
  };

 edit = (comment, text) => {
    for (let i = 0; i < this.state.comments.length; i++) {
      if (this.state.comments[i] === comment) {
        comment.message = text;
        comment.date = new Date();
        return this.setState(({ comments }) => ({
          comments: [...comments.slice(0, i), comment, ...comments.slice(i + 1)],
          edit: null
        }));
      }
    }
  }

  // Форма для заполнения комментариев
  render() {
    return (
      <div className="comments">
        <h1>Create a comment:</h1>

        <form onSubmit={this.onSubmit}>
          <input
            ref={(e) => (this.name = e)}
            type="text"
            placeholder="Имя пользователя"
            name=""
          />
          <select onChange={(e) => this.setState({ img: e.target.value })}>
            {this.avatar.map((avatar) => {
              return (
                <option key={avatar.img} value={avatar.img}>
                  {avatar.name}
                </option>
              );
            })}
          </select>
          <img style={{ height: "150px", width: "150px" }} src={this.state.img} alt="" />
          <input
            ref={(e) => (this.email = e)}
            type="email"
            placeholder="Email"
          />
          <textarea placeholder="Комментарий" ref={(e) => (this.message = e)} />
          <input
            ref={(e) => (this.secretWord = e)}
            type="text"
            placeholder="Секретное слово"
          />
          <input className="send" type="submit" value="Отправить" />
          <h2>Comments: </h2>

        </form>
        {this.comments()}
      </div>
    );
  }
}

class CommentsDel extends Component {
  onSubmit = (e) => {
    e.preventDefault()
    if (this.yourWord.value === this.props.comment.secretWord) {
      return this.props.delete(this.props.comment);
    }
    alert("Секретное слово введено неверно!")
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          ref={(e) => (this.yourWord = e)}
          placeholder="Секретное слово"
        />
        <input type="submit" value="Подтвердить" />
      </form>
    );
  }
}
class CommentsEdit extends Component {
  onSubmit = e => {
    e.preventDefault()
    this.props.edit(this.props.comment, this.yourComment.value)
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="name">Пользователь: {this.props.comment.name}</div>
        <div className="message">Email: {this.props.comment.email}</div>
        <textarea ref={(e) => (this.yourComment = e)} defaultValue={this.props.comment.message} />
        <input type="submit" value="Подтвердить" />
      </form>
    )
  }
}
class CommentsInfo extends Component {
  render() {
    let comment = this.props.comment;
    return (
      <>
        <div className="name">Пользователь: {comment.name}</div>
        <div className="date">Дата изменения: {comment.date.toLocaleString()}</div>
        <div className="message">Email: {comment.email}</div>
      </>
    );
  }
}
