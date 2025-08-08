import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should initialize count to 0 and val to 1', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it('should increment count by val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should update val and increment count by new val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(5);
  });

  it('should allow multiple increments', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(2);
  });

  it('should increment correctly after changing val multiple times', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(3);
    });
    act(() => {
      result.current.increment();
    });
    act(() => {
      result.current.setVal(2);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(5);
  });

  it('should not increment if val is 0', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(0);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(0);
  });

  it('should handle negative val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(-2);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(-2);
  });

  it('should allow setting val back to 1 and incrementing', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(10);
    });
    act(() => {
      result.current.increment();
    });
    act(() => {
      result.current.setVal(1);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(11);
  });
});