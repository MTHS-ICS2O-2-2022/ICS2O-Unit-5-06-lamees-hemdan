// Copyright (c) 2023 Lamees Hemdan All rights reserved
//
// Created by: Lamees Hemdan
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function doMathClicked () {
  // This function multiplyes two numbers

  // input
  const number1 = parseInt(document.getElementById("number-1").value)
  const number2 = parseInt(document.getElementById("number-2").value)

  // process
  let counter = 0
  let answer = 0
  while (counter < number2) {
    answer = answer + number1
    counter = counter + 1
  }

  // output
  document.getElementById('number-entered').innerHTML = number1 + " x " + number2 + " = " + answer
}
