// import PropTypes from "prop-types";

const cardData = [
  {
    title: "$0 / Month",
    tag: "FREE",
    features: [
      { isIncluded: true, text: "Single User" },
      { isIncluded: true, text: "50GB Storage" },
      { isIncluded: true, text: "Unlimited Public Projects" },
      { isIncluded: true, text: "Community Access" },
      { isIncluded: false, text: "Unlimited Private Projects" },
      { isIncluded: false, text: "Dedicated Phone Support" },
      { isIncluded: false, text: "Free Subdomain" },
      { isIncluded: false, text: "Monthly Status Reports" },
    ],
  },
  {
      
    title: "$9 / Month",
    tag: 'PLUS',
    features: [{isIncluded: true, text: '5 User' }, 
              {isIncluded: true, text: '50GB Storage' }, 
              {isIncluded: true, text: 'Unlimited Public Projects' },
              {isIncluded: true, text: 'Community Access' },
              {isIncluded: true, text: 'Unlimited Private Projects' },
              {isIncluded: true, text: 'Dedicated Phone Support' },
              {isIncluded: true, text: 'Free Subdomain' },
              {isIncluded: false, text: 'Monthly Status Reports'},]
  },
  {
  
    title: "$49 / Month",
    tag: 'PRO',
    features: [
              {isIncluded: true, text: 'Single User' }, 
              {isIncluded: true, text: '50GB Storage' }, 
              {isIncluded: true, text: 'Unlimited Public Projects' },
              {isIncluded: true, text: 'Community Access' },
              {isIncluded: true, text: 'Unlimited Private Projects' },
              {isIncluded: true, text: 'Dedicated Phone Support' },
              {isIncluded: true, text: 'Free Subdomain' },
              {isIncluded: true, text: 'Monthly Status Reports' },]
  },
];
function User(props) {
  return (
    <div className="container">
    <div className="card-container">
      <h3>{props.tag}</h3>
      <h3>{props.title}</h3>
      <div className="buttons">
        <div className="features">
          <ul>
            {props.features.map((feature, index) => (
              <li key={index}>
                {feature.isIncluded ? (
                  <>
                    ✓ {feature.text}
                  </>
                ) : (
                  <>
                    ✗ {feature.text}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        <button className="primary outline">BUTTON</button>
      </div>
    </div>
    </div>
  );
}


export const PricingCard = () => {
  return (
    <>
      {cardData.map((user, index) => (
        <User
          key={index}
          tag={user.tag}
          title={user.title}
          features={user.features}
        />
      ))}
    </>
  );
};
