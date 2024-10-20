import React from "react";

export const NewsletterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Subscribed");
    }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nobis.
      </p>
      <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3" onSubmit={onSubmitHandler}>
        <input
          className="outline-none w-full sm:flex-1"
          type="email"
          placeholder="Enter you email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};
