{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
    pkgs.python3
  ];
  idx.extensions = [
    
  
 "kilocode.kilo-code"];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
      static_html_preview = {
        command = [
          "python"
          "-m"
          "http.server"
          "$PORT"
        ];
        manager = "web";
        cwd = "Liquid-Glass-UI-Examples/apple-liquid-glass-switcher/dist";
      };
    };
  };
}