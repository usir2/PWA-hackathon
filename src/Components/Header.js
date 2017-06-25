import React, { Component } from 'react';
import '../css/Header.css'
import * as firebase from 'firebase';
import {connect} from "react-redux";

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalRegis: "modal register-modal",
      modalLogin: "modal login-modal",
      emailFill: "help is-danger is-hidden",
      passwordFill:"help is-danger is-hidden",
      confirmPasswordFill:"help is-danger is-hidden",
      confirmPasswordEq:"help is-danger is-hidden",
      isNewUser:"isNewUser",
      logoutBT:"button is-danger is-hidden",
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
    this.emailLoginChange=this.emailLoginChange.bind(this);
    this.passwordLoginChange =this.passwordLoginChange.bind(this);
    this.register = this.register.bind(this);
    this.signOut = this.signOut.bind(this);
    this.signIn = this.signIn.bind(this);
    this.initApp = this.initApp.bind(this);
    this.insertUserData=this.insertUserData.bind(this);
    this.showUserData=this.showUserData.bind(this);
    this.initApp()

  }
  initApp(){
    const that = this;
    firebase.auth().onAuthStateChanged(function(user){

      if(user){
        //console.log("login as :",user)
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        that.setState({
          isNewUser: "isNewUser is-hidden",
          logoutBT:"button is-danger"
        })
        that.props.setEmail(email)
        that.showUserData(email)

      }
    });
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
              isNewUser: "isNewUser is-hidden",
              logoutBT:"button is-danger"
            })
            that.insertUserData(user.email)
            //console.log("res :",user)
        }).catch(function(error){
            that.setState({
              firebaseRegisMessage:error.message
            })
        })
      }
  }

  signIn(){
    //console.log("SIGNIN : ", this.state.emailLogin)
    const that = this;

    firebase.auth().signInWithEmailAndPassword(this.state.emailLogin,this.state.passwordLogin).then(function() {
        that.setState({
          modalLogin: "modal login-modal",
          isNewUser: "isNewUser is-hidden",
          logoutBT:"button is-danger"
        })
    }).catch(function(error){
        //console.log(error.message)
    })
  }
  signOut(){
    const that = this;

    firebase.auth().signOut().then(function() {
      that.setState({
        modalRegis: "modal register-modal",
        isNewUser: "isNewUser",
        logoutBT:"button is-danger is-hidden"
      })
    }).catch(function(error) {
      // An error happened.
    });
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
      if(this.state.confirmPassword === this.state.passwordRegis){
        this.setState({
          confirmPasswordEq: "help is-danger is-hidden",
        })
        return true;
      }
      else{
        this.setState({
          confirmPasswordEq: "help is-danger",
        })
        return false;
      }
    }

  }
  insertUserData(email) {
    var firebaseRef = firebase.database().ref("User/");
    firebaseRef.push({
      email: email,
      connections: "",
      lastOnline: "",
      photo:"https://pwa-online-hackathon.firebaseapp.com/static/media/logo-nav.51d58f3e.png"

    });

  }

  showUserData(email) {
    const that = this;
    var firebaseRef = firebase.database().ref("User");
      firebaseRef.once('value').then(function(dataSnapshot) {
        dataSnapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();

          if(childData.email===email){
            that.props.setUserKey(childKey)
            that.props.setPicPath(childData.photo)
          }
        });
      });
  }


  render() {
    const that = this;
    //console.log("REDUX USER : ",this.props.user)
    return (
      <div className="Header">
        <nav className="nav hFirst">

          <div className="nav-center">
            <a className="nav-item">
            EZ BOARD

            </a>
            <a className={this.state.isNewUser}>
              <a className="button is-warning" onClick={()=>that.openLoginModal()}>
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>LOGIN
              </a>
              <a className="button" onClick={()=>that.openRegisModal()}>Register</a>
            </a>
            <a className={this.state.logoutBT} onClick={that.signOut}>LOGOUT</a>

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
                <p className={that.state.confirmPasswordEq}>Confirm-password not equeal Password</p>

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
                <button className="button is-success" onClick={this.signIn} >
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

const mapStatetoProps=(state)=>{
  return {
    user:state.user
  }
}
const mapDispatchtoProps=(dispatch)=>{
  return {
    setUserKey:(userKey)=>{
      dispatch({
        type:"setUserKey",
        payload:userKey
      })
    },
    setEmail:(email)=>{
      dispatch({
        type:"setEmail",
        payload:email
      })
    },
    setPicPath:(picPath)=>{
      dispatch({
        type:"setPicPath",
        payload:picPath
      })
    }
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Header)
