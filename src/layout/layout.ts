import { ref, onMounted } from "vue";
import { eStorage } from "easy-async-storage";
export const themeKey = "forliy-admin-theme";

export const useThemeManager = () => {
  const $e = eStorage();
  const dark = ref(false);

  onMounted(() => {
    if (!$e.check(themeKey).status) {
      $e.keep().set(themeKey, dark.value ? "1" : "0");
    } else {
      dark.value = $e.get(themeKey) == "1" ? true : false;
    }
  });

  const triggerTheme = () => {
    dark.value = !dark.value;
    $e.keep().set(themeKey, dark.value ? "1" : "0");
  };
  return {
    dark,
    triggerTheme,
  };
};
