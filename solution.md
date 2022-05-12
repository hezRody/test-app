# Insurance App

## Introduction

This project will demonstrate the various insurance packages available to individuals based on their age and location.

## Architecure

I have used react.js framework to build this, the version  is 18.


## Code Samples


If the age is over 100, one cannot apply for insurance.

   if (Number(age) > 100) {
        navigate("/ErrorPage");  // this will navigate to error page.
        return;
     } 

Calculate premium based on age,

 premium = inputs.age * 10;

Calculate premium based on selected country,

 premium = (inputs.age * 10 * data[0].rate) + data[0].currency;  // here data[0].rate is a rate  value & data[0].currency is a currency for the country, these values depends on the country  selected.

Calculate Safe and Super Safe package as follows;

    safepackInfo = 100 * data[0].rate + 50 + data[0].currency;
    superpackInfo = 100 * data[0].rate + 75 + data[0].currency;
  // safe package is 50% of the standard package & super safe package is 75% of super safe package, the rate differs based on the country selected.

## Installation

Install 

npm intall 

Usage

npm start