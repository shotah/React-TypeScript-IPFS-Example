import { ReportHandler } from 'web-vitals/src/types';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    return import('web-vitals')
      .then(
        ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(onPerfEntry);
          getFID(onPerfEntry);
          getFCP(onPerfEntry);
          getLCP(onPerfEntry);
          getTTFB(onPerfEntry);
          return null;
        }
      );
  }
};

export default reportWebVitals;
