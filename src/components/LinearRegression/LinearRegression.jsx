import React from "react";

function LinearRegression() {
  return (
    <div className="container">
      <h1>Understanding Linear Regression</h1>

      <h2>What is Linear Regression?</h2>
      <p>
        Linear regression is a type of supervised machine learning algorithm
        that computes the linear relationship between the dependent variable and
        one or more independent features by fitting a linear equation to
        observed data.
      </p>
      <p>
        When there is only one independent feature, it is known as{" "}
        <strong>Simple Linear Regression</strong>, and when there are more than
        one feature, it is known as <strong>Multiple Linear Regression</strong>.
      </p>
      <p>
        Similarly, when there is only one dependent variable, it is considered{" "}
        <strong>Univariate Linear Regression</strong>, while when there are more
        than one dependent variables, it is known as{" "}
        <strong>Multivariate Regression</strong>.
      </p>

      <h2>Why Linear Regression is Important?</h2>
      <p>
        The interpretability of linear regression is a notable strength. The
        models equation provides clear coefficients that elucidate the impact of
        each independent variable on the dependent variable, facilitating a
        deeper understanding of the underlying dynamics. Its simplicity is a
        virtue, as linear regression is transparent, easy to implement, and
        serves as a foundational concept for more complex algorithms.
      </p>
      <p>
        Linear regression is not merely a predictive tool; it forms the basis
        for various advanced models. Techniques like regularization and support
        vector machines draw inspiration from linear regression, expanding its
        utility. Additionally, linear regression is a cornerstone in assumption
        testing, enabling researchers to validate key assumptions about the
        data.
      </p>

      <h2>Types of Linear Regression</h2>
      <h3>Simple Linear Regression</h3>
      <p>
        This is the simplest form of linear regression, and it involves only one
        independent variable and one dependent variable. The equation for simple
        linear regression is:
      </p>
      <div className="example">
        <code>
          y = β<sub>0</sub> + β<sub>1</sub>X
        </code>
      </div>
      <p>where:</p>
      <ul>
        <li>
          <code>Y</code> is the dependent variable
        </li>
        <li>
          <code>X</code> is the independent variable
        </li>
        <li>
          <code>
            β<sub>0</sub>
          </code>{" "}
          is the intercept
        </li>
        <li>
          <code>
            β<sub>1</sub>
          </code>{" "}
          is the slope
        </li>
      </ul>

      <h3>Multiple Linear Regression</h3>
      <p>
        This involves more than one independent variable and one dependent
        variable. The equation for multiple linear regression is:
      </p>
      <div className="example">
        <code>
          y = β<sub>0</sub> + β<sub>1</sub>X<sub>1</sub> + β<sub>2</sub>X
          <sub>2</sub> + … + β<sub>n</sub>X<sub>n</sub>
        </code>
      </div>
      <p>where:</p>
      <ul>
        <li>
          <code>Y</code> is the dependent variable
        </li>
        <li>
          <code>
            X<sub>1</sub>, X<sub>2</sub>, …, X<sub>n</sub>
          </code>{" "}
          are the independent variables
        </li>
        <li>
          <code>
            β<sub>0</sub>
          </code>{" "}
          is the intercept
        </li>
        <li>
          <code>
            β<sub>1</sub>, β<sub>2</sub>, …, β<sub>n</sub>
          </code>{" "}
          are the slopes
        </li>
      </ul>

      <h2>What is the Best Fit Line?</h2>
      <p>
        Our primary objective while using linear regression is to locate the
        best-fit line, which implies that the error between the predicted and
        actual values should be kept to a minimum. There will be the least error
        in the best-fit line.
      </p>
      <p>
        The best-fit line equation provides a straight line that represents the
        relationship between the dependent and independent variables. The slope
        of the line indicates how much the dependent variable changes for a unit
        change in the independent variable(s).
      </p>

      <h2>Linear Regression in Machine Learning</h2>
      <p>
        In machine learning, linear regression is used to predict a dependent
        variable value (y) based on a given independent variable (x). Here,{" "}
        <code>X</code> may be a single feature or multiple features representing
        the problem.
      </p>
      <p>
        Linear regression performs the task to predict a dependent variable
        value (y) based on a given independent variable (x)). Hence, the name is
        Linear Regression.
      </p>

      <h2>Hypothesis Function in Linear Regression</h2>
      <p>
        Assuming that our independent feature is experience (<code>X</code>) and
        the respective salary (<code>Y</code>) is the dependent variable, the
        salary can be predicted using:
      </p>
      <div className="example">
        <code>
          Y<sup> </sup>= θ<sub>1</sub> + θ<sub>2</sub>X
        </code>
      </div>
      <p>OR</p>
      <div className="example">
        <code>
          y<sub>i</sub>
          <sup> </sup>= θ<sub>1</sub> + θ<sub>2</sub>x<sub>i</sub>
        </code>
      </div>
      <p>
        Here,{" "}
        <code>
          y<sub>i</sub>
        </code>{" "}
        are labels to data,{" "}
        <code>
          x<sub>i</sub>
        </code>{" "}
        are the input independent training data, and{" "}
        <code>
          y<sub>i</sub>
          <sup> </sup>
        </code>{" "}
        are the predicted values. The model gets the best regression fit line by
        finding the best θ<sub>1</sub> and θ<sub>2</sub> values.
      </p>

      <h2>
        How to Update θ<sub>1</sub> and θ<sub>2</sub> Values?
      </h2>
      <p>
        To achieve the best-fit regression line, the model aims to predict the
        target value{" "}
        <code>
          Y<sup> </sup>
        </code>{" "}
        such that the error difference between the predicted value and the true
        value is minimized. It is crucial to update the θ<sub>1</sub> and θ
        <sub>2</sub> values to minimize the error.
      </p>
      <div className="example">
        <code>
          minimize 1/n ∑(y<sub>i</sub>
          <sup> </sup> − y<sub>i</sub>)<sup>2</sup>
        </code>
      </div>

      <h2>Cost Function for Linear Regression</h2>
      <p>
        The cost function or the loss function measures the error between the
        predicted value{" "}
        <code>
          Y<sup> </sup>
        </code>{" "}
        and the true value <code>Y</code>. The Mean Squared Error (MSE) cost
        function is used to calculate the average squared errors between the
        predicted values and the actual values.
      </p>
      <div className="example">
        <code>
          Cost function (J) = 1/n ∑(y<sub>i</sub>
          <sup> </sup> − y<sub>i</sub>)<sup>2</sup>
        </code>
      </div>
      <p>
        Using the MSE function, gradient descent is applied to update the values
        of θ<sub>1</sub> and θ<sub>2</sub> to minimize the MSE and achieve the
        best-fit line.
      </p>

      <h2>Gradient Descent for Linear Regression</h2>
      <p>
        A linear regression model can be trained using gradient descent by
        iteratively modifying the models parameters to reduce the MSE. Gradient
        descent starts with random θ<sub>1</sub> and θ<sub>2</sub> values and
        updates them to reduce the cost function.
      </p>
    </div>
  );
}

export default LinearRegression;
