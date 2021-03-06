@routes.each do |route|
  json.set! route.id do
    json.extract! route, :route_name, :id, :activity_type, :coordinates_list, :user_id, :description, :est_duration, :elevation, :distance, :created_at, :updated_at, :marker_coordinates
  end
end
