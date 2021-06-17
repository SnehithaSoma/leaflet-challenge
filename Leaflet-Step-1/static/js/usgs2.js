{
  type: "Feature",
  properties: {
    mag: Decimal,
    place: String,
    time: Long Integer,
    updated: Long Integer,
    tz: Integer,
    url: String,
    felt:Integer,
    cdi: Decimal,
    mmi: Decimal,
    alert: String,
    status: String,
    tsunami: Integer,
    sig:Integer,
    net: String,
    code: String,
    ids: String,
    sources: String,
    types: String,
    nst: Integer,
    dmin: Decimal,
    rms: Decimal,
    gap: Decimal,
    magType: String,
    type: String,
    products: {
      <productType>: [
        {
          id: String,
          type: String,
          code: String,
          source: String,
          updateTime: Integer,
          status: String,
          properties: {
            <key>: String,
            …
          },
          preferredWeight: Integer,
          contents: {
            <path>: {
              contentType: String,
              lastModified: Long Integer,
              length: Integer,
              url: String
            },
            …
          }
        },
        …
      ],
      …
    }
  },
  geometry: {
    type: "Point",
    coordinates: [
      longitude,
      latitude,
      depth
    ]
  },
  id: String
}