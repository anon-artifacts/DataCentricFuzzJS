  // ArrayBuffer with elements [3,5,7,11] followed by Uint8Array
  const a = d8.serializer.deserialize(new Uint8Array([255,15,66,4,3,5,7,11,86,66,1,2,0]).buffer)
  const b = d8.serializer.deserialize(new Uint8Array([255,15,66,4,3,5,7,11,86,66,1,2,1]).buffer)
  a.byteLength // ok
  b.byteLength // crash in Builtins_TypedArrayPrototypeByteLength