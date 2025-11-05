 function f(a) { a[4] = 42; }

  for (let i = 0; i < 2; i++) {
    f([]);
    f(Atomics.Mutex());
  }

//                                                                                               
// Fatal error in ../../src/heap/heap-verifier.cc, line 228                                                                                                                                        
// Check failed: ReadOnlyHeap::Contains(heap_object) || shared_space_->Contains(heap_object) || shared_lo_space_->Contains(heap_object).                                                          
//      