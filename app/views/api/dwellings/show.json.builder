json.set! dwelling.id do
  json.extract! dwelling, :id, :owner_id,  :location, :lat, :long, :price,
    :image_url, :about_this, :type, :guest_limit, :bedrooms, :beds,
    :featured, :description, :rating
end
