import { StyleSheet, css } from "aphrodite";
import React from "react";

import globalStyles from "webapp/shared-styles-package/global-styles";

const Figure = ({ children, caption }) =>
  <div className={css(styles.figureContainer)}>
    <div className={css(styles.figure)}>
      {children}
      <div className={css(styles.figureBorder)} />
    </div>
    {caption ? <div className={css(styles.figureCaption)}>{caption}</div> : null}
  </div>;

export default Figure;

const styles = StyleSheet.create({
  figureContainer: {
    marginBottom: 24,
  },

  figure: {
    borderRadius: 4,
    overflow: "hidden",
    position: "relative",
    lineHeight: 0,
  },

  figureBorder: {
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    pointerEvents: "none",
  },

  figureCaption: {
    color: globalStyles.colors.gray41,
    ...globalStyles.typography.bodyXsmall,
    fontStyle: "normal",
    marginTop: 8,
    marginBottom: 38,
  },
});
