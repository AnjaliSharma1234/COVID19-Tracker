import React from 'react';
import PropTypes from 'prop-types';

const SocialMediaIcon = props => {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: props.iconColor,
        margin: '0 5px',
      }}
    >
      <i className={props.className} />
    </a>
  );
};

const defaultStyle = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '2em',
};

function SocialMediaIcons(props) {
  const icons = props.icons || [];
  let style = {};
  if (!props.className) {
    style = defaultStyle;
  } 
  return (
    <div
      className={props.className}
      style={style}
    >
      {icons.map((icon, i) => {
        return (
          <SocialMediaIcon
            key={i}
            className={`${props.classNamePrefix || 'fab'} ${
              icon.className
            }`}
            url={icon.url}
            iconColor={props.iconColor || 'blue'}
          />
        );
      })}
    </div>
  );
}

SocialMediaIcons.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
  classNamePrefix: PropTypes.string,
  iconSize: PropTypes.string,
};

SocialMediaIcon.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
  iconColor: PropTypes.string,
};

export default SocialMediaIcons;