const PhoneNumberOne = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <a href="tel:+52">
        <div className="container-phoneNumber">
          <div className="container-phoneIcon">
            <img src="/svg/icons/phone_frm.svg" alt="" />
          </div>
          <div className="phoneNumber">+52 55 5555 5555</div>
        </div>
      </a>
    </div>
  );
};

export { PhoneNumberOne };
