import { Formik, Form, Field } from "formik";

function PokemonMainForm(params) {
  return (
    <article className="mainform">
      <p className="mainform__title">Search Pokemon</p>
      <h1 className="mainform__desc">Search for new Pokemon Data</h1>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(val) => {
          console.log(val);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              placeholder="Enter a name of Pokemon"
              className="mainform__field"
              type="text"
              name="name"
            />
            <button className="mainform__submit-btn" type="submit">
              OK!
            </button>
          </Form>
        )}
      </Formik>
    </article>
  );
}
export default PokemonMainForm;
