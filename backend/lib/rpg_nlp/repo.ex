defmodule RpgNlp.Repo do
  use Ecto.Repo,
    otp_app: :rpg_nlp,
    adapter: Ecto.Adapters.Postgres
end
