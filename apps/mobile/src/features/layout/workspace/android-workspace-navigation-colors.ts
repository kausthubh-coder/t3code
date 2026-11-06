import {
  flattenThemeColor,
  isDarkThemeColor,
  themeColorWithAlpha,
  themeColorWithContrast,
  type MobileThemeVariables,
} from "../../../lib/mobileTheme";

// A light pill is a card lifted by its shadow. A dark page swallows the native shadow, so the
// fill alone has to lift the pill off the page and off the cards it floats over.
function floatingContainerColor(colors: MobileThemeVariables) {
  const screen = colors["--color-screen"];
  if (!isDarkThemeColor(screen)) return flattenThemeColor(colors["--color-card"], screen);
  const fill = flattenThemeColor(colors["--color-secondary"], screen);
  return themeColorWithContrast(
    fill,
    [screen, flattenThemeColor(colors["--color-grouped-card"], screen)],
    1.25,
  );
}

export function androidWorkspaceNavigationColors(
  colors: MobileThemeVariables,
  rail: boolean,
  floating = false,
) {
  const screen = colors["--color-screen"];
  const header = flattenThemeColor(colors["--color-header"], screen);
  const containerColor = rail
    ? header
    : floating
      ? floatingContainerColor(colors)
      : flattenThemeColor(themeColorWithAlpha(colors["--color-header-foreground"], 0.05), header);
  if (floating) return floatingSelectionColors(colors, containerColor);
  const indicatorColor = themeColorWithContrast(
    flattenThemeColor(colors["--color-secondary"], containerColor),
    containerColor,
    1.5,
  );
  return {
    containerColor,
    indicatorColor,
    selectedColor: themeColorWithContrast(
      flattenThemeColor(colors["--color-secondary-foreground"], indicatorColor),
      [indicatorColor, containerColor],
    ),
    unselectedColor: flattenThemeColor(colors["--color-header-foreground"], containerColor),
  };
}

// The floating pill marks the open tab with the accent, as the iOS tab bar does.
function floatingSelectionColors(colors: MobileThemeVariables, containerColor: string) {
  const dark = isDarkThemeColor(containerColor);
  const indicatorColor = themeColorWithContrast(
    flattenThemeColor(
      themeColorWithAlpha(colors["--color-primary"], dark ? 0.28 : 0.16),
      containerColor,
    ),
    containerColor,
    1.5,
  );
  return {
    containerColor,
    indicatorColor,
    selectedColor: themeColorWithContrast(
      flattenThemeColor(colors["--color-primary-text"], indicatorColor),
      [indicatorColor, containerColor],
    ),
    unselectedColor: themeColorWithContrast(
      flattenThemeColor(colors["--color-foreground-muted"], containerColor),
      containerColor,
    ),
  };
}
