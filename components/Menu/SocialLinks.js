import { colors } from '../../styles/constants'

const SocialLinks = (props) => (
  <div className="social">
    <a href="https://github.com/theTaoTeam" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path id="github" d="M12,.3A12,12,0,0,0,8.2,23.682c.6.113.82-.258.82-.577,0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61A3.181,3.181,0,0,0,3.633,17.7c-1.087-.744.084-.729.084-.729a2.516,2.516,0,0,1,1.838,1.236,2.557,2.557,0,0,0,3.495,1,2.558,2.558,0,0,1,.76-1.6c-2.665-.3-5.466-1.332-5.466-5.93A4.63,4.63,0,0,1,5.579,8.45a4.267,4.267,0,0,1,.105-3.176s1.005-.322,3.3,1.23a11.314,11.314,0,0,1,6,0c2.28-1.552,3.285-1.23,3.285-1.23a4.385,4.385,0,0,1,.12,3.176,4.648,4.648,0,0,1,1.23,3.22c0,4.61-2.805,5.625-5.475,5.92a2.873,2.873,0,0,1,.81,2.22c0,1.606-.015,2.9-.015,3.286,0,.315.21.69.825.57A11.985,11.985,0,0,0,12,.3" transform="translate(0)" />
      </svg>
    </a>
    <a href="https://www.linkedin.com/company/35623127/admin/" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path id="linkedin" d="M20.447,20.452H16.893V14.883c0-1.328-.027-3.037-1.852-3.037-1.853,0-2.136,1.445-2.136,2.939v5.667H9.351V9h3.414v1.561h.046a3.745,3.745,0,0,1,3.37-1.85c3.6,0,4.267,2.37,4.267,5.455v6.286ZM5.337,7.433A2.064,2.064,0,1,1,7.4,5.368,2.062,2.062,0,0,1,5.337,7.433ZM7.119,20.452H3.555V9H7.119ZM22.225,0H1.771A1.75,1.75,0,0,0,0,1.729V22.271A1.749,1.749,0,0,0,1.771,24H22.222A1.756,1.756,0,0,0,24,22.271V1.729A1.756,1.756,0,0,0,22.222,0Z" transform="translate(0)" />
      </svg>
    </a>
    <style jsx>{`
      .social {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 65px;
        position: absolute;
        bottom: 10vh;
        right: 5vw;
      }

      a {
        line-height: 0%;
      }

      svg {
        fill: ${colors.light};
      }

      svg:hover {
        fill: ${colors.lightAccent};
        transition: fill .3s ease-out;
      }
    `}</style>
  </div>
)

export default SocialLinks