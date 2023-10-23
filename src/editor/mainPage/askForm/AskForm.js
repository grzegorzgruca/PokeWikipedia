import { Form, Field, Formik } from "formik";

function AskForm(params) {
  return (
    <article className="askForm__conta">
      <div className="askForm">
        <div className="askForm__inside-container">
          <img
            alt="background-img"
            className="askForm__background-img"
            src=".\resources\png\mainPage\spider-web.png"
          />
          <h2 className="askForm__title-text">Send us your opinion!</h2>
          <Formik
            className="askForm__form"
            initialValues={{ email: "", emailText: "", emailTitle: "" }}
            onSubmit={(val) => {
              window.open(
                `mailto:${val.email}?subject=${val.emailTitle}&body=${val.emailText}`
              );
            }}
          >
            {({ isSubmitting }) => (
              <Form className="askForm__container">
                <div className="askForm__email-body">
                  <div className="askForm__email-wraper">
                    <Field
                      className="askForm__email"
                      placeholder="Enter your E-mail"
                      type="text"
                      name="email"
                    />
                    <div className="askForm__img-wraper">
                      <img
                        className="askForm__title-img"
                        src=".\resources\png\mainPage\user.png"
                        alt="avatar icon"
                      />
                    </div>
                  </div>
                  <div className="askForm__title-wraper">
                    <Field
                      className="askForm__title"
                      placeholder="Subject"
                      type="text"
                      name="emailTitle"
                    />
                    <div className="askForm__img-wraper">
                      <img
                        className="askForm__title-img"
                        src=".\resources\png\mainPage\chat.png"
                        alt="avatar icon"
                      />
                    </div>
                  </div>
                  <div className="askForm__content-wraper">
                    <Field
                      className="askForm__content"
                      placeholder="Enter the Message"
                      rows="10"
                      name="emailText"
                      component="textarea"
                    />
                  </div>
                </div>

                <button className="askForm__submit-btn" type="submit">
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </article>
  );
}
export default AskForm;
