# frozen_string_literal: true

use Rack::Static,
    :urls => ["/css", "fonts", "/img", "/js"],
    :root => "."

run Rack::File.new(".")
