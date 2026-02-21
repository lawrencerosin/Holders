00 61 73 6d
0000000: 0061 736d                                 ; WASM_BINARY_MAGIC
0000004: 0100 0000                                 ; WASM_BINARY_VERSION
; section "Type" (1)
0000008: 01                                        ; section code
0000009: 00                                        ; section size (guess)
000000a: 05                                        ; num types
; func type 0
000000b: 60                                        ; func
000000c: 00                                        ; num params
000000d: 00                                        ; num results
; func type 1
000000e: 60                                        ; func
000000f: 02                                        ; num params
0000010: 7f                                        ; i32
0000011: 7f                                        ; i32
0000012: 00                                        ; num results
; func type 2
0000013: 60                                        ; func
0000014: 01                                        ; num params
0000015: 7f                                        ; i32
0000016: 01                                        ; num results
0000017: 7e                                        ; i64
; func type 3
0000018: 60                                        ; func
0000019: 02                                        ; num params
000001a: 7c                                        ; f64
000001b: 7f                                        ; i32
000001c: 00                                        ; num results
; func type 4
000001d: 60                                        ; func
000001e: 01                                        ; num params
000001f: 7f                                        ; i32
0000020: 01                                        ; num results
0000021: 7c                                        ; f64
0000009: 18                                        ; FIXUP section size
; section "Function" (3)
0000022: 03                                        ; section code
0000023: 00                                        ; section size (guess)
0000024: 05                                        ; num functions
0000025: 00                                        ; function 0 signature index
0000026: 01                                        ; function 1 signature index
0000027: 02                                        ; function 2 signature index
0000028: 03                                        ; function 3 signature index
0000029: 04                                        ; function 4 signature index
0000023: 06                                        ; FIXUP section size
; section "Memory" (5)
000002a: 05                                        ; section code
000002b: 00                                        ; section size (guess)
000002c: 01                                        ; num memories
; memory 0
000002d: 00                                        ; limits: flags
000002e: 904e                                      ; limits: initial
000002b: 04                                        ; FIXUP section size
; section "Global" (6)
0000030: 06                                        ; section code
0000031: 00                                        ; section size (guess)
0000032: 01                                        ; num globals
0000033: 7f                                        ; i32
0000034: 01                                        ; global mutability
0000035: 41                                        ; i32.const
0000036: 01                                        ; i32 literal
0000037: 0b                                        ; end
0000031: 06                                        ; FIXUP section size
; section "Export" (7)
0000038: 07                                        ; section code
0000039: 00                                        ; section size (guess)
000003a: 06                                        ; num exports
000003b: 09                                        ; string length
000003c: 6265 6769 6e6e 696e 67                   beginning  ; export name
0000045: 00                                        ; export kind
0000046: 00                                        ; export func index
0000047: 08                                        ; string length
0000048: 706c 6163 6549 6e74                      placeInt  ; export name
0000050: 00                                        ; export kind
0000051: 01                                        ; export func index
0000052: 06                                        ; string length
0000053: 6765 7449 6e74                           getInt  ; export name
0000059: 00                                        ; export kind
000005a: 02                                        ; export func index
000005b: 0a                                        ; string length
000005c: 706c 6163 6546 6c6f 6174                 placeFloat  ; export name
0000066: 00                                        ; export kind
0000067: 03                                        ; export func index
0000068: 08                                        ; string length
0000069: 6765 7446 6c6f 6174                      getFloat  ; export name
0000071: 00                                        ; export kind
0000072: 04                                        ; export func index
0000073: 04                                        ; string length
0000074: 6e65 7874                                next  ; export name
0000078: 03                                        ; export kind
0000079: 00                                        ; export global index
0000039: 40                                        ; FIXUP section size
; section "Code" (10)
000007a: 0a                                        ; section code
000007b: 00                                        ; section size (guess)
000007c: 05                                        ; num functions
; function body 0
000007d: 00                                        ; func body size (guess)
000007e: 00                                        ; local decl count
000007f: 03                                        ; loop
0000080: 40                                        ; void
0000081: 41                                        ; i32.const
0000082: 01                                        ; i32 literal
0000083: 41                                        ; i32.const
0000084: 00                                        ; i32 literal
0000085: 36                                        ; i32.store
0000086: 02                                        ; alignment
0000087: 00                                        ; store offset
0000088: 23                                        ; global.get
0000089: 00                                        ; global index
000008a: 41                                        ; i32.const
000008b: 8002                                      ; i32 literal
000008d: 6b                                        ; i32.sub
000008e: 24                                        ; global.set
000008f: 00                                        ; global index
0000090: 23                                        ; global.get
0000091: 00                                        ; global index
0000092: 41                                        ; i32.const
0000093: 00                                        ; i32 literal
0000094: 4d                                        ; i32.le_u
0000095: 04                                        ; if
0000096: 40                                        ; void
0000097: 0c                                        ; br
0000098: 01                                        ; break depth
0000099: 0b                                        ; end
000009a: 0b                                        ; end
000009b: 0b                                        ; end
000007d: 1e                                        ; FIXUP func body size
; function body 1
000009c: 00                                        ; func body size (guess)
000009d: 00                                        ; local decl count
000009e: 20                                        ; local.get
000009f: 01                                        ; local index
00000a0: 41                                        ; i32.const
00000a1: 01                                        ; i32 literal
00000a2: 46                                        ; i32.eq
00000a3: 04                                        ; if
00000a4: 40                                        ; void
00000a5: 23                                        ; global.get
00000a6: 00                                        ; global index
00000a7: 20                                        ; local.get
00000a8: 00                                        ; local index
00000a9: 36                                        ; i32.store
00000aa: 02                                        ; alignment
00000ab: 00                                        ; store offset
00000ac: 23                                        ; global.get
00000ad: 00                                        ; global index
00000ae: 41                                        ; i32.const
00000af: 8002                                      ; i32 literal
00000b1: 6a                                        ; i32.add
00000b2: 24                                        ; global.set
00000b3: 00                                        ; global index
00000b4: 0b                                        ; end
00000b5: 0b                                        ; end
000009c: 19                                        ; FIXUP func body size
; function body 2
00000b6: 00                                        ; func body size (guess)
00000b7: 00                                        ; local decl count
00000b8: 20                                        ; local.get
00000b9: 00                                        ; local index
00000ba: 29                                        ; i64.load
00000bb: 03                                        ; alignment
00000bc: 00                                        ; load offset
00000bd: 0b                                        ; end
00000b6: 07                                        ; FIXUP func body size
; function body 3
00000be: 00                                        ; func body size (guess)
00000bf: 00                                        ; local decl count
00000c0: 20                                        ; local.get
00000c1: 01                                        ; local index
00000c2: 41                                        ; i32.const
00000c3: 01                                        ; i32 literal
00000c4: 46                                        ; i32.eq
00000c5: 04                                        ; if
00000c6: 40                                        ; void
00000c7: 23                                        ; global.get
00000c8: 00                                        ; global index
00000c9: 20                                        ; local.get
00000ca: 00                                        ; local index
00000cb: 39                                        ; f64.store
00000cc: 03                                        ; alignment
00000cd: 00                                        ; store offset
00000ce: 23                                        ; global.get
00000cf: 00                                        ; global index
00000d0: 41                                        ; i32.const
00000d1: 8002                                      ; i32 literal
00000d3: 6a                                        ; i32.add
00000d4: 24                                        ; global.set
00000d5: 00                                        ; global index
00000d6: 0b                                        ; end
00000d7: 0b                                        ; end
00000be: 19                                        ; FIXUP func body size
; function body 4
00000d8: 00                                        ; func body size (guess)
00000d9: 00                                        ; local decl count
00000da: 20                                        ; local.get
00000db: 00                                        ; local index
00000dc: 2b                                        ; f64.load
00000dd: 03                                        ; alignment
00000de: 00                                        ; load offset
00000df: 0b                                        ; end
00000d8: 07                                        ; FIXUP func body size
000007b: 64                                        ; FIXUP section size
; section "name"
00000e0: 00                                        ; section code
00000e1: 00                                        ; section size (guess)
00000e2: 04                                        ; string length
00000e3: 6e61 6d65                                name  ; custom section name
00000e7: 01                                        ; name subsection type
00000e8: 00                                        ; subsection size (guess)
00000e9: 05                                        ; num names
00000ea: 00                                        ; elem index
00000eb: 0d                                        ; string length
00000ec: 676f 546f 4265 6769 6e6e 696e 67         goToBeginning  ; elem name 0
00000f9: 01                                        ; elem index
00000fa: 0d                                        ; string length
00000fb: 706c 6163 6549 6e74 5661 6c75 65         placeIntValue  ; elem name 1
0000108: 02                                        ; elem index
0000109: 0b                                        ; string length
000010a: 6765 7449 6e74 5661 6c75 65              getIntValue  ; elem name 2
0000115: 03                                        ; elem index
0000116: 0f                                        ; string length
0000117: 706c 6163 6546 6c6f 6174 5661 6c75 65    placeFloatValue  ; elem name 3
0000126: 04                                        ; elem index
0000127: 0d                                        ; string length
0000128: 6765 7446 6c6f 6174 5661 6c75 65         getFloatValue  ; elem name 4
00000e8: 4c                                        ; FIXUP subsection size
0000135: 02                                        ; local name type
0000136: 00                                        ; subsection size (guess)
0000137: 05                                        ; num functions
0000138: 00                                        ; function index
0000139: 00                                        ; num locals
000013a: 01                                        ; function index
000013b: 02                                        ; num locals
000013c: 00                                        ; local index
000013d: 05                                        ; string length
000013e: 7661 6c75 65                             value  ; local name 0
0000143: 01                                        ; local index
0000144: 09                                        ; string length
0000145: 636f 6e64 6974 696f 6e                   condition  ; local name 1
000014e: 02                                        ; function index
000014f: 01                                        ; num locals
0000150: 00                                        ; local index
0000151: 08                                        ; string length
0000152: 706f 7369 7469 6f6e                      position  ; local name 0
000015a: 03                                        ; function index
000015b: 02                                        ; num locals
000015c: 00                                        ; local index
000015d: 05                                        ; string length
000015e: 7661 6c75 65                             value  ; local name 0
0000163: 01                                        ; local index
0000164: 09                                        ; string length
0000165: 636f 6e64 6974 696f 6e                   condition  ; local name 1
000016e: 04                                        ; function index
000016f: 01                                        ; num locals
0000170: 00                                        ; local index
0000171: 08                                        ; string length
0000172: 706f 7369 7469 6f6e                      position  ; local name 0
0000136: 43                                        ; FIXUP subsection size
000017a: 07                                        ; name subsection type
000017b: 00                                        ; subsection size (guess)
000017c: 01                                        ; num names
000017d: 00                                        ; elem index
000017e: 04                                        ; string length
000017f: 6e65 7874                                next  ; elem name 0
000017b: 07                                        ; FIXUP subsection size
; move data: [e2, 183) -> [e3, 184)
00000e1: a101                                      ; FIXUP section size