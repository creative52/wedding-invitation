window.onload = function () {
  const navs = document.querySelectorAll("nav .nav-menu");
  const progressBarEl = document.querySelector(".progress");
  const pane = {
    main: document.getElementById("main"),
    profile: document.getElementById("profile"),
    photo: document.getElementById("photo"),
    location: document.getElementById("location")
  };

  // nav에 클릭 이벤트
  const navMenuEl = document.querySelectorAll(".nav-menu");
  for (let i = 0; i < navMenuEl.length; i++) {
    const menuEl = navMenuEl[i];
    menuEl.onclick = () => {
      pane[menuEl.id.slice(4)].scrollIntoView({ behavior: "smooth" });
    };
  }

  // 스크롤 이벤트에 따라 상단 메뉴 이모지 변경
  getTopFromEachElement();
  window.addEventListener("scroll", getTopFromEachElement);
  function getTopFromEachElement() {
    const mainTop = Math.abs(pane.main.getBoundingClientRect().top);
    const profileTop = Math.abs(pane.profile.getBoundingClientRect().top);
    const photoTop = Math.abs(pane.photo.getBoundingClientRect().top);
    const locationTop = Math.abs(pane.location.getBoundingClientRect().top);

    const minimum = Math.min(mainTop, profileTop, photoTop, locationTop);

    switch (minimum) {
      case mainTop:
        turnOnEmoji("main");
        break;
      case profileTop:
        turnOnEmoji("profile");
        break;
      case photoTop:
        turnOnEmoji("photo");
        break;
      case locationTop:
        turnOnEmoji("location");
        break;
    }

    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = document.documentElement.clientHeight;
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    progressBarEl.style.width = `${(scrollTop / (scrollHeight - windowHeight)) *
      100}%`;
  }

  function turnOnEmoji(id) {
    for (let i = 0; i < navs.length; i++) {
      const nav = navs[i];
      if (nav.id === `nav-${id}`) {
        navs[i].classList.add("on");
      } else {
        navs[i].classList.remove("on");
      }
    }
  }

  /**
   * 컨택츠 모달
   */
  const husbandContactModal = document.querySelector(".contacts .modal.husband");
  document.querySelector('.contact-husband').addEventListener('click', openContactHusbandModal);
  // 모달 열기
  function openContactHusbandModal(e) {
    husbandContactModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  function closeContactHusbandModal() {
    husbandContactModal.style.display = "none";
    document.body.style.overflow = "";
  }
  // 모달 닫기
  const husbandContactCloseButton = document.querySelector(".contacts .modal.husband .close");
  const husbandContactDim = document.querySelector(".contacts .modal.husband .dim");
  husbandContactCloseButton.onclick = closeContactHusbandModal;
  husbandContactDim.onclick = closeContactHusbandModal;

  const wifeContactModal = document.querySelector(".contacts .modal.wife");
  document.querySelector('.contact-wife').addEventListener('click', openContactWifeModal);
  // 모달 열기
  function openContactWifeModal(e) {
    wifeContactModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  function closeContactWifeModal() {
    wifeContactModal.style.display = "none";
    document.body.style.overflow = "";
  }
  // 모달 닫기
  const wifeContactCloseButton = document.querySelector(".contacts .modal.wife .close");
  const wifeContactDim = document.querySelector(".contacts .modal.wife .dim");
  wifeContactCloseButton.onclick = closeContactWifeModal;
  wifeContactDim.onclick = closeContactWifeModal;


  /**
   * 이미지
   */
  const imagesEl = document.querySelector(".images");
  for (let i = 0; i < 14; i++) {
    const imageWrapperEl = document.createElement("div");
    imageWrapperEl.className = "image-wrapper";
    const imageEl = document.createElement("img");
    const src = `./assets/img/photo/${i}.jpg`;
    imageEl.src = src;
    imageEl.onclick = openImageModal;
    imageWrapperEl.appendChild(imageEl);
    imagesEl.appendChild(imageWrapperEl);
    imageEl.onload = function () {
      const width = this.width;
      const height = this.height;
      if (width > height
        || i === 0 || i === 1) {
        this.parentElement.classList.add('width');
      }
    };
  }

  /**
   * 이미지 모달
   */
  const modal = document.querySelector(".pane.photo .modal");
  const modalImg = document.getElementById("modal-image");
  // 모달 열기
  function openImageModal(e) {
    modal.style.display = "flex";
    modalImg.src = e.target.src;
    document.body.style.overflow = "hidden";
  }
  function closeImageModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
  // 모달 닫기
  const closeButton = document.querySelector(".pane.photo .close");
  const dim = document.querySelector(".pane.photo .dim");
  closeButton.onclick = closeImageModal;
  dim.onclick = closeImageModal;

  /**
   * 지도
   */
  // const map = new daum.maps.Map(document.getElementById("map"), {
  //   center: new daum.maps.LatLng(37.48696198627081, 127.03344609502346),
  //   level: 4 //지도의 레벨(확대, 축소 정도)
  // });
  // map.setZoomable(false);
  // map.setDraggable(false);

  // new daum.maps.Marker({
  //   position: new daum.maps.LatLng(37.48696198627081, 127.03344609502346),
  //   image: new daum.maps.MarkerImage(
  //     "./assets/img/marker.png",
  //     new daum.maps.Size(64, 69),
  //     { offset: new daum.maps.Point(27, 69) }
  //   )
  // }).setMap(map);

  /**
   * 축의금
   */
  const husAccModal = document.querySelector('.husband-account-modal');
  document.querySelector('.hus-account-modal-btn').addEventListener('click', openHusAccModal);
  function openHusAccModal(e) {
    husAccModal.style.display = 'flex';
    document.body.style.overflow = "hidden";
  }
  function closeHusAccModal() {
    husAccModal.style.display = "none";
    document.body.style.overflow = "";
  }
  const husAccModalClose = document.querySelector('.husband-account-modal .close');
  husAccModalClose.addEventListener('click', closeHusAccModal);

  const wifeAccModal = document.querySelector('.wife-account-modal');
  document.querySelector('.wife-account-modal-btn').addEventListener('click', openWifeAccModal);
  function openWifeAccModal(e) {
    wifeAccModal.style.display = 'flex';
    document.body.style.overflow = "hidden";
  }
  function closeWifeAccModal() {
    wifeAccModal.style.display = "none";
    document.body.style.overflow = "";
  }
  const wifeAccModalClose = document.querySelector('.wife-account-modal .close');
  wifeAccModalClose.addEventListener('click', closeWifeAccModal);

  document.querySelector('.huscopy').addEventListener('click', copyHusAccToClipboard);
  function copyHusAccToClipboard() {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = '1002643227938';
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }
  document.querySelector('.husfacopy').addEventListener('click', copyHusFaAccToClipboard);
  function copyHusFaAccToClipboard() {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = '179120039523';
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }
  document.querySelector('.wifecopy').addEventListener('click', copyWifeAccToClipboard);
  function copyWifeAccToClipboard() {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = '1002695901225';
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }
  document.querySelector('.wifefacopy').addEventListener('click', copyWifeFaAccToClipboard);
  function copyWifeFaAccToClipboard() {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = '075120601899';
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }

  document.querySelectorAll('.copy').forEach(el => el.addEventListener('click', openAlert));

  const accountPaneEl = document.querySelector('.pane.bank-account');
  function openAlert() {
    const alertEl = document.createElement('div');
    alertEl.className = 'copied-modal';
    alertEl.style.display = 'flex';
    const spanEl = document.createElement('span');
    spanEl.className = 'text';
    spanEl.innerText = '복사되었습니다.';
    alertEl.appendChild(spanEl);
    accountPaneEl.appendChild(alertEl);
    setTimeout(() => {
      alertEl.style.display = 'none';
      accountPaneEl.removeChild(alertEl);
    }, 2000);
  }
};
function windowcopen(url, title, options) {

  var option_nosize = "";
  options_arr = options.split(",")
  for (i = 0; (i + 1) <= options_arr.length; i++) {
    option = options_arr[i]
    option_arr = option.split("=")
    var fld = option_arr[0]
    var val = option_arr[1]
    if (fld == 'width') var ww = val
    else if (fld == 'height') var wh = val
    else option_nosize += "," + fld + "=" + val
  }

  var left = (screen.width / 2) - (ww / 2)
  var top = (screen.height / 2) - (wh / 2) - 50
  return window.open(url, title, 'width=' + ww + ', height=' + wh + ', top=' + top + ', left=' + left + option_nosize)
}

const is_pc = navigator.userAgent.indexOf('Mobile') === -1
Kakao.init('13da3914377346b0b8f74f5309b49dad')
function kakao_navi() {
  if (is_pc) {
    alert('모바일 기기 전용 기능입니다')
  }
  Kakao.Navi.start({
    name: '%EA%B1%B0%EC%A0%9C%EA%B5%90%ED%9A%8C',
    x: 129.070347000116,
    y: 35.1866090595006,
    coordType: 'wgs84'
  });
}
