import { Formik, Form, Field } from "formik";

function PokemonMainForm(params) {
  return (
    <article id="search" className="mainform">
      <p className="mainform__title">Search for Pokemon</p>
      <h1 className="mainform__desc">Discover new statistics</h1>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(val) => {
          console.log(val);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <Field
              placeholder="Enter the name of Pokemon"
              className="mainform__field"
              type="text"
              name="name"
            />
            <button className="mainform__submit-btn" type="submit">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </article>
  );
}
export default PokemonMainForm;
