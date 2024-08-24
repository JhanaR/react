function UserLogin(props){
    console.log(props.isLoggedIn);
  // if (props.isLoggedIn) {
  //   return <OtherLogin/>;
  // } else {
  //   return <GuestLogin/>;
  // }
  return ( 
    props.isLoggedIn ? <OtherLogin/> : <GuestLogin/>
)
}

export default UserLogin;

function GuestLogin() {
  return (
      <p> Guest Based Login Web page</p>
  );
}
//export {GuestLogin}

function OtherLogin() {
  return (
      <p> Other User Login Web page</p>
  );
}
//export {OtherLogin}
