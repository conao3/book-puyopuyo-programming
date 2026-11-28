{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    treefmt-nix.url = "github:numtide/treefmt-nix";
  };

  outputs = inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [ "x86_64-linux" "aarch64-darwin" ];

      imports = [
        inputs.treefmt-nix.flakeModule
      ];

      perSystem = { pkgs, lib, ... }: {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_latest
            pnpm
            biome
          ];
          BIOME_BINARY = "${pkgs.biome}/bin/biome";
        };

        treefmt = {
          projectRootFile = "flake.nix";
          programs.biome.enable = true;
          settings.formatter.biome.options = lib.mkForce [
            "check"
            "--write"
            "--no-errors-on-unmatched"
            "--config-path"
            "biome.json"
          ];
          settings.global.excludes = [ "ref/**" ];
        };
      };
    };
}
