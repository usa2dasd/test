function Wo_ResendCode(){var e=$("#confirm-user-id").val(),n=$("#phone-num").val();$("#re-send").hide(),Wo_SetTimer(),$.post(Wo_Ajax_Requests_File()+"?f=resned_code",{user_id:e,phone_number:n},function(e){200==e.status||alert(e.errors)})}function Wo_SetTimer(){$("#hideMsg h2 span").text("60"),$("#hideMsg").fadeIn("fast");var e=$("#hideMsg h2 span").text(),n=setInterval(function(){$("#hideMsg h2 span").text(--e),0==e&&$("#hideMsg").fadeOut("fast",function(){clearInterval(n),$("#re-send").fadeIn("fast")})},1e3)};
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
