import React from "react";

// Example pricing plans
const pricingPlans = [
  { id: 1, plan: "Basic", description: "For individuals just starting out.", price: "$19.99/month" },
  { id: 2, plan: "Standard", description: "For small teams and businesses.", price: "$49.99/month" },
  { id: 3, plan: "Premium", description: "For large teams and enterprises.", price: "$99.99/month" },
];

const Pricing = () => {
  return (
    <div className="container py-14 sm:min-h-[600px]">
      <h1 className="text-3xl font-semibold text-center sm:text-4xl mb-12">Our Pricing Plans</h1>

      {/* Pricing card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {pricingPlans.map(({ id, plan, description, price }) => (
          <div
            key={id}
            className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300"
          >
            <h2 className="text-2xl font-bold">{plan}</h2>
            <p>{description}</p>
            <p className="text-xl font-semibold">{price}</p>
            <a
              href="#"
              className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"
            >
              Choose Plan
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
