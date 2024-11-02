require "log"

module CLI
  def self.main
    Log.setup_from_env(default_level: :info)

    puts "::warning::This is the message"
    puts "::error::This is the message"
    puts "::info::This is the message"
  end
end

CLI.main
