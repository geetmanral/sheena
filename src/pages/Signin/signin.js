
import './signin.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
function SignIn() {
  return (

    <div class="signIn">
       <div class="login-bg">
          <div class="container login-center">
             <form class="form-signin ng-untouched ng-pristine ng-invalid" novalidate="">
                <a class="brand text-center logo-signin" href="/auth">
                <img alt="Logo" onerror="this.src='assets/images/50x50.png'" width="150px" src="https://dev.assistant-cap.com/uploads/logo_5ed265a4e12b4c24ed16e58b_1591009682304_large.png" /></a>
                <h2 class="form-signin-heading">Please sign in</h2>
                <div class="form-group">
                   <label class="required1" for="">Email Address / Mobile Number</label>
                   <input class="form-control ng-untouched ng-pristine ng-invalid" formcontrolname="username" id="login_email" type="text" placeholder="Email Address / Mobile Number" />
                </div>
                <div class="form-group">
                   <label class="required1" for="">Password</label>
                   <input autocomplete="false" class="form-control ng-untouched ng-pristine ng-invalid" formcontrolname="password" id="login_password" type="password" title="Password" placeholder="Password" />
                </div>
                <div class="checkbox mb-4 mt-4 d-flex justify-content-between"><label class="control control-solid control-solid-primary control--checkbox">Remember me <input id="rememberPassword" name="rememberPassword" type="checkbox" unchecked="checked" class="ng-untouched ng-pristine ng-valid"/>
                <span class="control__indicator"></span></label><a class="float-right " href="/auth/reset-password" translate="">Forgot Password ?</a></div>
                <button class="btn btn-lg btn-primary btn-block" translate="" type="submit">Sign In</button>
                <div class="mt-4 text-center font-16"><span _ngcontent-c2=""> Don't have an account yet ? </span><a class="" href="/auth/signup">Sign Up</a></div>
             </form>
          </div>
       </div>
 </div>
  );
}

export default SignIn;
