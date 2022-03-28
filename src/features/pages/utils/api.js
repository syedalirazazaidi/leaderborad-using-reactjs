import { db } from "../../../fire_base.config";

export const newPlayerData = async () => {
  const playerRef = await db.collection("addnewplayer");
  const doc = await playerRef.onSnapshot();

  return doc;
};
