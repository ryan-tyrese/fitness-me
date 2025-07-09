import bentRow from '../assets/bent-over-row.png'
import cableRow from '../assets/cable-row.png'
import closePulldown from '../assets/close-grip-pulldown.png'
import deadlift from '../assets/deadlift.png'
import pullUp from '../assets/pull-up.png'
import row from '../assets/row.png'
import straightPulldown from '../assets/straight-arm-pulldown.png'
import widePulldown from '../assets/wide-grip-pulldown.png'

const ExerciseCard = () => {
  return (
    <>
    <h1 className="font-bold text-3xl text-gray-900 mb-4">Showing Results</h1>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={bentRow}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                  BACK
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Dumbbell Bent-Over Row (Singel Arm)
                </h2>
                <p className="mt-1 text-gray-700">Dumbbell, Bench</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={cableRow}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                  BACK
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Seated Cable Row
                </h2>
                <p className="mt-1 text-gray-700">Cable Machine</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={row}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                  BACK
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Barbell Row
                </h2>
                <p className="mt-1 text-gray-700">Barbell</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={deadlift}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                  BACK, LEGS
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Barbell Deadlift
                </h2>
                <p className="mt-1 text-gray-700">Barbell, Plates</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={pullUp}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                  BACK
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Pull Up
                </h2>
                <p className="mt-1 text-gray-700">Pull Bar</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={widePulldown}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                  BACK
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Wide Grip Pulldown
                </h2>
                <p className="mt-1 text-gray-700">Lat Pulldown Machine, Lat Bar</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={closePulldown}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                  BACK
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Close Grip Pulldown
                </h2>
                <p className="mt-1 text-gray-700">Lat Pulldown Machine, Lat Bar</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={straightPulldown}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">
                  BACK
                </h3>
                <h2 className="text-black title-font text-lg font-medium">
                  Straight Arm Lat Pulldown
                </h2>
                <p className="mt-1 text-gray-700">Straight bar, high pulley cable</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExerciseCard
