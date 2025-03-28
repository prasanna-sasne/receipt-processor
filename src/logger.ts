const isDebug = process.env.DEBUG === 'true';

const info = (message: string) => {
  if (isDebug) {
    console.info(message);  // Or use any other logging method like Winston, if required
  }
};

const debug = (message: string) => {
  if (isDebug) {
    console.debug(message);  // Logs debug info if DEBUG mode is enabled
  }
};

const error = (message: string) => {
  console.error(message);  // Always log errors
};

export default { info, debug, error };