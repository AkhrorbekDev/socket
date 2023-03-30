export default {
  install: (app) => {
    function ISOtoDate(target, type = 'time' || 'full') {
      if (type === 'full') {
        return new Date(target).toLocaleDateString() + '  ' + new Date(target).toLocaleTimeString();

      }
      return new Date(target).toLocaleTimeString();
    }

    app.provide('ISOtoDate', ISOtoDate);
    app.config.globalProperties.$ISOtoDate = ISOtoDate
  },
};
