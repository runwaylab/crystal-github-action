require "../spec_helper.cr"
require "../../src/version"

describe CrystalGitHubAction do
  describe "#version" do
    it "finds that the version is of the correct type" do
      CrystalGitHubAction::VERSION.should be_a(String)
    end
  end
end
