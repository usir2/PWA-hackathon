import React, { Component } from 'react';
import '../css/Header.css'
import * as firebase from 'firebase';

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalRegis: "modal register-modal",
      modalLogin: "modal login-modal",
      emailFill: "help is-danger is-hidden",
      passwordFill:"help is-danger is-hidden",
      confirmPasswordFill:"help is-danger is-hidden",
      firebaseRegisMessage:"",
      emailRegis:"",
      passwordRegis:"",
      confirmPassword:"",
      emailLogin:"",
      passwordLogin:""
    };
    this.emailRegisChange = this.emailRegisChange.bind(this);
    this.passwordRegisChange = this.passwordRegisChange.bind(this);
    this.confirmPassChange = this.confirmPassChange.bind(this);
    this.register = this.register.bind(this);

  }

  openRegisModal(){
    this.setState({
      modalRegis: "modal register-modal is-active"
    })
  }
  closeRegisModal(){
    this.setState({
      modalRegis: "modal register-modal"
    })
  }

  openLoginModal(){
    this.setState({
      modalLogin: "modal login-modal is-active"
    })
  }
  closeLoginModal(){
    this.setState({
      modalLogin: "modal login-modal"
    })
  }

  emailRegisChange(event){
    this.state.emailRegis = event.target.value;
  }

  passwordRegisChange(event){
    this.state.passwordRegis = event.target.value;
  }

  confirmPassChange(event){
    this.state.confirmPassword = event.target.value;
  }

  emailLoginChange(event){
    this.state.emailLogin = event.target.value;
  }
  passwordLoginChange(event){
    this.state.passwordLogin = event.target.value;
  }

  register(){
    const that = this;

      if(this.checkRegisEmail() && this.checkRegisPassword() && this.checkRegisConPass()){
        firebase.auth().createUserWithEmailAndPassword(this.state.emailRegis,this.state.passwordRegis).then(function(user) {
            var user = firebase.auth().currentUser;
            that.setState({
              modalRegis: "modal register-modal",
            })
            console.log(user)
        }).catch(function(error){
            that.setState({
              firebaseRegisMessage:error.message
            })
        })



      }
  }

  checkRegisEmail(){
    if(this.state.emailRegis === ""){
      this.setState({
        emailFill: "help is-danger",
      })
      return false;
    }
    else{
      this.setState({
        emailFill: "help is-danger is-hidden",
      })
      return true;
    }
  }
  checkRegisPassword(){
    if(this.state.passwordRegis === ""){
      this.setState({
        passwordFill: "help is-danger",
      })
      return false;
    }
    else{
      this.setState({
        passwordFill: "help is-danger is-hidden",
      })
      return true;
    }
  }
  checkRegisConPass(){
    if(this.state.confirmPassword === ""){
      this.setState({
        confirmPasswordFill: "help is-danger",
      })
      return false;
    }
    else{
      this.setState({
        confirmPasswordFill: "help is-danger is-hidden",
      })
      return true;
    }
  }


  render() {
    const that = this;
    return (
      <div className="Header">
        <nav className="nav hFirst">

          <div className="nav-center">
            <a className="nav-item">
            EZ BOARD

            </a>
            <a className="button is-warning" onClick={()=>that.openLoginModal()}>
              <i className="fa fa-user-circle-o" aria-hidden="true"></i>LOGIN
            </a>
            <a className="button" onClick={()=>that.openRegisModal()}>Register</a>

          </div>

        </nav>
        <nav className="nav hSecond">
          <div className="nav-center">
            <a className="nav-item is-active  is-tab">
              <i className="fa fa-newspaper-o" aria-hidden="true" />
              News
            </a>
            <a className="nav-item">
              <i className="fa fa-video-camera" aria-hidden="true"></i>
              Movies
            </a>
            <a className="nav-item">
              <i className="fa fa-gamepad" aria-hidden="true" />
              Games
            </a>

          </div>
        </nav>

        <div className={that.state.modalRegis}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Register</p>
              <button className="delete" onClick={()=>that.closeRegisModal()}></button>
            </header>
            <section className="modal-card-body">
              <div className="field">
                <p className="control has-icons-left">
                  <input className="input" type="email" placeholder="Email" onChange={that.emailRegisChange}/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </p>
                <p className={that.state.emailFill}>Please fill email</p>

                </div>
                <div className="field">
                <p className="control has-icons-left">
                  <input className="input" type="password" placeholder="Password" onChange={that.passwordRegisChange} />
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </p>
                <p className={that.state.passwordFill}>Please fill password</p>

                </div>
                <div className="field">
                <p className="control has-icons-left">
                  <input className="input" type="password" placeholder="Confirm Password" onChange={that.confirmPassChange}/>
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </p>
                <p className={that.state.confirmPasswordFill}>Please fill Confirm password</p>
                <p className="help is-danger">{that.state.firebaseRegisMessage}</p>


                </div>
            </section>
            <footer className="modal-card-foot">
              <div className="footButton">
                <button className="button is-success" onClick={that.register}>
                  REGISTER
                </button>
              </div>
            </footer>
          </div>
        </div>

        <div className={that.state.modalLogin}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Login</p>
              <button className="delete" onClick={()=>that.closeLoginModal()}></button>
            </header>
            <section className="modal-card-body">
              <div className="field">
                <p className="control has-icons-left">
                  <input className="input" type="email" placeholder="Email" onChange={that.emailLoginChange} />
                  <span className="icon is-small is-left">
                    <i className="fa fa-envelope"></i>
                  </span>
                </p>
                </div>
                <div className="field">
                <p className="control has-icons-left">
                  <input className="input" type="password" placeholder="Password" onChange={that.passwordLoginChange}  />
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock"></i>
                  </span>
                </p>
                </div>
                <div className="field">
                <p className="control">

                </p>
              </div>
            </section>
            <footer className="modal-card-foot">
              <div className="footButton">
                <button className="button is-success" >
                  Login
                </button>
              </div>
            </footer>
          </div>
        </div>

      </div>
    );
  }
}
