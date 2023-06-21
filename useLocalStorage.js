import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PREFIX = 'codepen-clone-';

const useLocalStorage = (key, initialValue) => {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue !== null) return JSON.parse(jsonValue);
    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};

useLocalStorage.propTypes = {
  key: PropTypes.string.isRequired,
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default useLocalStorage;
