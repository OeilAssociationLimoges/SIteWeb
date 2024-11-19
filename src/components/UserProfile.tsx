import { Show, type Component } from "solid-js";
import { getProfilePicture, logout } from "../utils/client";
import { DropdownMenu } from "@kobalte/core/dropdown-menu";
import store from "../utils/store";

const UserProfile: Component = () => {
  const profilePicture = getProfilePicture();

  return (
    <Show when={store.user} fallback={
      <a href="/identification" class="bg-white text-black font-500 py-1.5 px-4">
        S'identifier
      </a>
    }>
      {user => (
        <DropdownMenu>
          <DropdownMenu.Trigger class="hover:bg-white/10 px-4 py-2 md:-mr-4 outline-none">
            <div class="flex items-center gap-4">
              <div class="text-white text-right">
                <p><span class="font-300">{user().firstName}</span> {user().lastName}</p>
                <p class="text-xs opacity-50">Étudiant à l'IUT du Limousin</p>
              </div>
              <img
                class="flex-shrink-0 rounded-full w-11 h-11 border-2 border-white bg-white"
                src={profilePicture ?? "/default.png"}
              />
            </div>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content class="min-w-[220px] bg-white px-4 py-3 border-2 border-black z-50"
              style={{
                "transform-origin": "var(--kb-menu-content-transform-origin)"
              }}
            >
              <DropdownMenu.Arrow />
              <DropdownMenu.Item
                class="cursor-pointer bg-white hover:bg-black hover:text-white px-3 py-2"
                onSelect={() => store.logout()}
              >
                Déconnexion
              </DropdownMenu.Item>
              <DropdownMenu.Item
                class="cursor-pointer bg-white hover:bg-black hover:text-white px-3 py-2"
                onSelect={() => window.open("https://unil.im/edt-iut-info")}
              >
                Voir mon EDT
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu>
      )}
    </Show>
  )
}

export default UserProfile;
