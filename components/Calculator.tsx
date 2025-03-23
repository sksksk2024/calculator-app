'use client';

import { use, useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [theme, setTheme] = useState<'theme1' | 'theme2' | 'theme3'>('theme1');

  //   Handle them change
  const handleThemeChange = (selectedTheme: 'theme1' | 'theme2' | 'theme3') => {
    setTheme(selectedTheme);
  };

  //   Handle input button presses (number or operator)
  const handleButtonClick = (value: string) => {
    setInput((prevInput) => (result ? result + value : prevInput + value));
    setResult(''); // Clear the result so the user can continue typing
  };

  // Handle delete button (DEL)
  const handleDelete = () => {
    setInput((prevInput) =>
      result ? result.slice(0, -1) : prevInput.slice(0, -1)
    );
  };

  //   Handle reset button (RESET)
  const handleReset = () => {
    setInput('');
    setResult('');
  };

  // Handle calculation when "=" button is pressed
  const handleCalculate = () => {
    try {
      const sanitizedInput = input.replace(/x/g, '*');
      // Evaluate the expression and update the result
      const evaluatedResult = Function(
        `'use strict'; return (${sanitizedInput})`
      )();
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
    <main
      className={`flex flex-col justify-center items-center w-full mx-auto px-48P py-32P pt-112P h-[100dvh] font-league-spartan
        ${theme === 'theme1' ? 'bg-desaturated-dark-blue-key-shadow' : ''}
        ${theme === 'theme2' ? 'bg-light-gray' : ''}
        ${theme === 'theme3' ? 'bg-very-dark-violet-main' : ''}
    `}
    >
      {/* CALCULATOR HEADER */}
      <section className="flex justify-between items-center w-full max-w-container-400 mb-32M">
        <h1
          className={`text-xl font-bold md:text-2xl
            ${theme === 'theme1' ? 'text-white' : ''}
              ${theme === 'theme2' ? 'text-very-dark-grayish-yellow' : ''}
              ${theme === 'theme3' ? 'text-light-yellow' : ''}
            `}
        >
          calc
        </h1>

        <div className="flex justify-center items-end gap-5">
          <span
            className={`hidden relative bottom-8I text-sm font-bold uppercase 2xs:block md:text-md
            ${theme === 'theme1' ? 'text-white' : ''}
            ${theme === 'theme2' ? 'text-very-dark-grayish-yellow' : ''}
            ${theme === 'theme3' ? 'text-light-yellow' : ''}
            `}
          >
            theme
          </span>
          <div className="flex flex-col justify-center items-center gap-2">
            <span
              className={`relative bottom-8I text-sm font-bold uppercase 2xs:hidden md:text-md
                ${theme === 'theme1' ? 'text-white' : ''}
                ${theme === 'theme2' ? 'text-very-dark-grayish-yellow' : ''}
                ${theme === 'theme3' ? 'text-light-yellow' : ''}
                `}
            >
              theme
            </span>

            <div
              className={`flex flex-row justify-center items-center gap-8
                ${theme === 'theme1' ? 'text-white' : ''}
                ${theme === 'theme2' ? 'text-very-dark-grayish-yellow' : ''}
                ${theme === 'theme3' ? 'text-light-yellow' : ''}
                `}
            >
              <label htmlFor="first">1</label>
              <label htmlFor="second">2</label>
              <label htmlFor="third">3</label>
            </div>
            <div
              className={`flex flex-row justify-center items-center gap-4 p-8P rounded-full
                ${
                  theme === 'theme1'
                    ? 'bg-very-dark-desaturated-blue-toggle'
                    : ''
                }
                ${theme === 'theme2' ? 'bg-grayish-red' : ''}
                ${theme === 'theme3' ? 'bg-very-dark-violet-toggle' : ''}
                `}
            >
              <div className="">
                <input
                  id="first"
                  className="hidden peer"
                  type="radio"
                  name="theme"
                  checked={theme === 'theme1'}
                  onChange={() => handleThemeChange('theme1')}
                />
                <label
                  htmlFor="first"
                  className={`w-6 h-6 rounded-full transparent flex items-center justify-center cursor-pointer
                    ${theme === 'theme1' ? 'peer-checked:bg-red' : ''}
                `}
                />
              </div>
              <div className="">
                <input
                  id="second"
                  className="hidden peer"
                  type="radio"
                  name="theme"
                  checked={theme === 'theme2'}
                  onChange={() => handleThemeChange('theme2')}
                />
                <label
                  htmlFor="second"
                  className={`w-6 h-6 rounded-full transparent flex items-center justify-center cursor-pointer
                    ${theme === 'theme2' ? 'peer-checked:bg-orange' : ''}`}
                />
              </div>
              <div className="">
                <input
                  id="third"
                  className="hidden peer"
                  type="radio"
                  name="theme"
                  checked={theme === 'theme3'}
                  onChange={() => handleThemeChange('theme3')}
                />
                <label
                  htmlFor="third"
                  className={`w-6 h-6 rounded-full transparent flex items-center justify-center cursor-pointer
                    ${theme === 'theme1' ? 'peer-checked:bg-red' : ''}
                    ${theme === 'theme2' ? 'peer-checked:bg-orange' : ''}
                    ${theme === 'theme3' ? 'peer-checked:bg-pure-cyan' : ''}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INPUT */}
      <form onSubmit={handleSubmit}>
        <section className="flex justify-between items-center w-full max-w-container-400 mb-32M">
          <label
            htmlFor="input-num"
            className={`flex flex-col justify-center items-center w-full p-16P rounded-5BR
                ${
                  theme === 'theme1'
                    ? 'bg-very-dark-desaturated-blue-screen'
                    : ''
                }
                ${theme === 'theme2' ? 'bg-white' : ''}
                ${theme === 'theme3' ? 'bg-very-dark-violet-toggle' : ''}
                `}
          >
            <input
              id="input-num"
              type="text"
              value={result || input}
              readOnly
              className={`pointer-events-none text-2xl text-end font-bold w-full rounded-5BR
                ${
                  theme === 'theme1'
                    ? 'text-white bg-very-dark-desaturated-blue-screen'
                    : ''
                }
                  ${
                    theme === 'theme2'
                      ? 'text-very-dark-grayish-yellow bg-white'
                      : ''
                  }
                  ${
                    theme === 'theme3'
                      ? 'text-light-yellow bg-very-dark-violet-toggle'
                      : ''
                  }
                `}
            />
          </label>
        </section>

        {/* KEYBOARD */}
        <section
          className={`flex flex-col justify-between items-center gap-4 w-full max-w-container-400 font-bold mb-32M p-32P rounded-10BR 
                ${
                  theme === 'theme1'
                    ? 'bg-very-dark-desaturated-blue-screen'
                    : ''
                }
                    ${theme === 'theme2' ? 'bg-grayish-red' : ''}
                `}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            {['7', '8', '9', 'DEL'].map((value) =>
              value === 'DEL' ? (
                <button
                  key={value}
                  type="button"
                  className={`text-lg text-white p-16P border-b-[5px]
                    ${
                      theme === 'theme1'
                        ? 'bg-desaturated-dark-blue-key-bg border-b-blue-900'
                        : ''
                    }
                          ${
                            theme === 'theme2'
                              ? 'bg-dark-moderate-cyan border-very-dark-cyan'
                              : ''
                          }
                          ${
                            theme === 'theme3'
                              ? 'text-light-yellow bg-dark-violet border-b-vivid-magenta'
                              : ''
                          }
                    `}
                  onClick={handleDelete}
                >
                  DEL
                </button>
              ) : (
                <button
                  key={value}
                  type="button"
                  className={`text-2xl p-8P border-b-[5px]
                    ${
                      theme === 'theme1'
                        ? 'text-very-dark-grayish-blue bg-light-grayish-orange border-b-desaturated-dark-blue-key-shadow'
                        : ''
                    }
                            ${
                              theme === 'theme2'
                                ? 'text-very-dark-grayish-yellow bg-light-grayish-yellow border-b-dark-grayish-orange'
                                : ''
                            }
                            ${
                              theme === 'theme3'
                                ? 'text-light-yellow bg-very-dark-violet border-b-dark-magenta'
                                : ''
                            }
                    `}
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
                className={`text-2xl p-8P border-b-[5px]
                    ${
                      theme === 'theme1'
                        ? 'text-very-dark-grayish-blue bg-light-grayish-orange border-b-desaturated-dark-blue-key-shadow'
                        : ''
                    }
                            ${
                              theme === 'theme2'
                                ? 'text-very-dark-grayish-yellow bg-light-grayish-yellow border-b-dark-grayish-orange'
                                : ''
                            }
                            ${
                              theme === 'theme3'
                                ? 'text-light-yellow bg-very-dark-violet border-b-dark-magenta'
                                : ''
                            }
                    `}
                onClick={() => handleButtonClick(value)}
              >
                {value}
              </button>
            ))}

            {['1', '2', '3', '-'].map((value) => (
              <button
                key={value}
                type="button"
                className={`text-2xl p-8P border-b-[5px]
                    ${
                      theme === 'theme1'
                        ? 'text-very-dark-grayish-blue bg-light-grayish-orange border-b-desaturated-dark-blue-key-shadow'
                        : ''
                    }
                            ${
                              theme === 'theme2'
                                ? 'text-very-dark-grayish-yellow bg-light-grayish-yellow border-b-dark-grayish-orange'
                                : ''
                            }
                            ${
                              theme === 'theme3'
                                ? 'text-light-yellow bg-very-dark-violet border-b-dark-magenta'
                                : ''
                            }
                    `}
                onClick={() => handleButtonClick(value)}
              >
                {value}
              </button>
            ))}

            {['.', '0', '/', 'x'].map((value) => (
              <button
                key={value}
                type="button"
                className={`text-2xl p-8P border-b-[5px]
                    ${
                      theme === 'theme1'
                        ? 'text-very-dark-grayish-blue bg-light-grayish-orange border-b-desaturated-dark-blue-key-shadow'
                        : ''
                    }
                            ${
                              theme === 'theme2'
                                ? 'text-very-dark-grayish-yellow bg-light-grayish-yellow border-b-dark-grayish-orange'
                                : ''
                            }
                            ${
                              theme === 'theme3'
                                ? 'text-light-yellow bg-very-dark-violet border-b-dark-magenta'
                                : ''
                            }
                    `}
                onClick={() => handleButtonClick(value)}
              >
                {value}
              </button>
            ))}
          </div>
          <div className="flex flex-col justify-around items-center gap-4 w-full sm:flex-row">
            <button
              type="button"
              className={`w-full text-lg text-white p-16P border-b-[5px] sm:w-1/2
                ${
                  theme === 'theme1'
                    ? 'bg-desaturated-dark-blue-key-bg border-b-blue-900'
                    : ''
                }
                        ${
                          theme === 'theme2'
                            ? 'bg-dark-moderate-cyan border-very-dark-cyan'
                            : ''
                        }
                        ${
                          theme === 'theme3'
                            ? 'text-light-yellow bg-dark-violet border-b-vivid-magenta'
                            : ''
                        }
                `}
              onClick={handleReset}
            >
              RESET
            </button>
            <button
              type="button"
              className={`w-full text-lg text-white p-16P border-b-[5px] sm:w-1/2
                ${theme === 'theme1' ? 'bg-red border-b-dark-red' : ''}
                          ${
                            theme === 'theme2'
                              ? 'bg-orange border-dark-orange'
                              : ''
                          }
                          ${
                            theme === 'theme3'
                              ? 'bg-pure-cyan border-soft-cyan text-dark-violet'
                              : ''
                          }
                `}
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
