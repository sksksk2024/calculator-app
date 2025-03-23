'use client';

import { use, useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  //   Handle input button presses (number or operator)
  const handleButtonClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  // Handle delete button (DEL)
  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  //   Handle reset button (RESET)
  const handleReset = () => {
    setInput('');
    setResult('');
  };

  // Handle calculation when "=" button is pressed
  const handleCalculate = () => {
    try {
      // Evaluate the expression and update the result
      const evaluatedResult = eval(input); // eval is risky to use
      setResult(evaluatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  // Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCalculate(); // calculate result when form is submitted
  };

  return (
    <main className="flex flex-col justify-center items-center w-full mx-auto px-48P py-32P pt-112P h-[100dvh] font-league-spartan">
      {/* CALCULATOR HEADER */}
      <section className="flex justify-between items-center w-full max-w-container-400 mb-32M">
        <h1 className="text-xl font-bold md:text-2xl">calc</h1>

        <div className="flex justify-center items-end gap-5">
          <span className="hidden relative bottom-8I text-sm font-bold uppercase 2xs:block md:text-md">
            theme
          </span>
          <div className="flex flex-col justify-center items-center gap-2">
            <span className="relative bottom-8I text-sm font-bold uppercase 2xs:hidden md:text-md">
              theme
            </span>

            <div className="flex flex-row justify-center items-center gap-8">
              <label htmlFor="first">1</label>
              <label htmlFor="second">2</label>
              <label htmlFor="third">3</label>
            </div>
            <div className="flex flex-row justify-center items-center gap-4 bg-very-dark-desaturated-blue-toggle p-8P rounded-full">
              <div className="">
                <input id="first" className="hidden peer" type="radio" />
                <label
                  htmlFor="first"
                  className="w-6 h-6 rounded-full transparent peer-checked:bg-red flex items-center justify-center cursor-pointer"
                />
              </div>
              <div className="">
                <input id="second" className="hidden peer" type="radio" />
                <label
                  htmlFor="second"
                  className="w-6 h-6 rounded-full transparent peer-checked:bg-red flex items-center justify-center cursor-pointer"
                />
              </div>
              <div className="">
                <input id="third" className="hidden peer" type="radio" />
                <label
                  htmlFor="third"
                  className="w-6 h-6 rounded-full transparent peer-checked:bg-red flex items-center justify-center cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INPUT */}
      <form onSubmit={() => handleSubmit}>
        <section className="flex justify-between items-center w-full max-w-container-400 mb-32M">
          <label
            htmlFor="input-num"
            className="flex flex-col justify-center items-center bg-very-dark-desaturated-blue-screen w-full p-16P rounded-5BR"
          >
            <input
              id="input-num"
              type="text"
              value={input}
              readOnly
              className="text-2xl text-white text-end font-bold w-full bg-very-dark-desaturated-blue-screen rounded-5BR "
            />
          </label>
        </section>

        {/* KEYBOARD */}
        <section className="flex flex-col justify-between items-center gap-4 w-full max-w-container-400 font-bold mb-32M p-32P rounded-10BR bg-very-dark-desaturated-blue-screen">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            {['7', '8', '9', 'DEL'].map((value) =>
              value === 'DEL' ? (
                <button
                  type="button"
                  className="text-lg text-white bg-desaturated-dark-blue-key-bg p-16P border-b-blue-900 border-b-[5px]"
                  onClick={() => handleDelete}
                >
                  DEL
                </button>
              ) : (
                <button
                  key={value}
                  type="button"
                  className="text-2xl text-very-dark-grayish-blue bg-light-grayish-orange p-8P border-b-desaturated-dark-blue-key-shadow border-b-[5px]"
                  onClick={() => handleButtonClick(value)}
                >
                  {value}
                </button>
              )
            )}

            {['4', '5', '6', '+'].map((value) => (
              <button
                key={value}
                type="button"
                className="text-2xl text-very-dark-grayish-blue bg-light-grayish-orange p-8P border-b-desaturated-dark-blue-key-shadow border-b-[5px]"
                onClick={() => handleButtonClick(value)}
              >
                {value}
              </button>
            ))}

            {['1', '2', '3', '-'].map((value) => (
              <button
                key={value}
                type="button"
                className="text-2xl text-very-dark-grayish-blue bg-light-grayish-orange p-8P border-b-desaturated-dark-blue-key-shadow border-b-[5px]"
                onClick={() => handleButtonClick(value)}
              >
                {value}
              </button>
            ))}

            {['.', '0', '/', 'x'].map((value) => (
              <button
                key={value}
                type="button"
                className="text-2xl text-very-dark-grayish-blue bg-light-grayish-orange p-8P border-b-desaturated-dark-blue-key-shadow border-b-[5px]"
                onClick={() => handleButtonClick(value)}
              >
                {value}
              </button>
            ))}
          </div>
          <div className="flex flex-col justify-around items-center gap-4 w-full sm:flex-row">
            <button
              type="button"
              className="w-full text-lg text-white bg-desaturated-dark-blue-key-bg p-16P border-b-blue-900 border-b-[5px] sm:w-1/2"
              onClick={handleReset}
            >
              RESET
            </button>
            <button
              type="button"
              className="w-full text-lg text-white bg-red p-16P border-b-dark-red border-b-[5px] sm:w-1/2"
              onClick={handleCalculate}
            >
              =
            </button>
          </div>
        </section>
      </form>
    </main>
  );
};

export default Calculator;
