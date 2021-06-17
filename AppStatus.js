import React from "react";

const status = {
  songId: "",
  playlistId: "",
  setSongId: () => {},
  setPlaylistId: () => {}
}

export const AppStatus = React.createContext(status);