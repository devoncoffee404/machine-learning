import React from "react";

function LogisticRegression() {
  return (
    <div className="container">
      <h1>What is Logistic Regression?</h1>
      <p>
        Logistic regression is used for binary classification where we use the
        sigmoid function, which takes input as independent variables and
        produces a probability value between 0 and 1.
      </p>

      <p>
        For example, we have two classes: <strong>Class 0</strong> and{" "}
        <strong>Class 1</strong>. If the value of the logistic function for an
        input is greater than 0.5 (threshold value), then it belongs to Class 1;
        otherwise, it belongs to Class 0. It`&apos;`s referred to as regression
        because it is an extension of linear regression but is mainly used for
        classification problems.
      </p>

      <h2>Key Points:</h2>
      <ul>
        <li>
          Logistic regression predicts the output of a categorical dependent
          variable. Therefore, the outcome must be categorical or discrete.
        </li>
        <li>
          It can be either Yes/No, 0/1, True/False, etc., but it provides
          probabilistic values between 0 and 1 instead of exact 0 or 1 values.
        </li>
        <li>
          In logistic regression, instead of fitting a regression line, we fit
          an `&quot;S`&quot;-shaped logistic function that predicts two possible
          values: 0 or 1.
        </li>
      </ul>

      <h2>Logistic Function – Sigmoid Function</h2>
      <p>
        The sigmoid function is used to map the predicted values to
        probabilities, converting real values into a range between 0 and 1.
      </p>

      <h2>Types of Logistic Regression</h2>
      <ul>
        <li>
          <strong>Binomial:</strong> Only two possible outcomes, e.g.,
          Pass/Fail, 0/1.
        </li>
        <li>
          <strong>Multinomial:</strong> Three or more possible unordered
          outcomes, e.g., cat/dog/sheep.
        </li>
        <li>
          <strong>Ordinal:</strong> Three or more ordered outcomes, e.g.,
          Low/Medium/High.
        </li>
      </ul>

      <h2>Sigmoid Function</h2>
      <p>The sigmoid function is defined as:</p>
      <code>σ(z) = 1 / (1 + e^(-z))</code>
      <p>
        Where <code>z</code> is the linear function of the input variables.
      </p>

      <h2>Logistic Regression Equation</h2>
      <p>The final logistic regression equation is:</p>
      <code>p(X; b, w) = 1 / (1 + e^(-w⋅X + b))</code>
    </div>
  );
}

export default LogisticRegression;
