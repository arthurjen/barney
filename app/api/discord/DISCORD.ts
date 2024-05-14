import { auth } from "auth";
import { APIGuildMember } from "discord-api-types/v10";

const baseURL = "https://discord.com/api";

export const DISCORD = {
  getMember: async () => {
    const session = (await auth()) as Session;
    const response = await fetch(
      `${baseURL}/users/@me/guilds/1037224670715453511/member`,
      {
        headers: {
          Authorization: "Bearer " + session!.accessToken,
        },
      }
    );
    const member = await response.json();
    return member as APIGuildMember;
  },
  getGuildRoles: async () => {
    const session = (await auth()) as Session;
    const response = await fetch(
      `${baseURL}/guilds/1037224670715453511/roles`,
      {
        headers: {
          Authorization: "Bearer " + session!.accessToken,
        },
      }
    );
    const roles = await response.json();
    console.log("guild roles", roles);
  },
  CCGPlusRoleID: "1239676172191793253",
};
