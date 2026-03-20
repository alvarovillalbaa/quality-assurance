import { act, renderHook, waitFor } from '@testing-library/react'

// import { useHookName } from './useHookName'

describe('useHookName', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns the initial contract', () => {
    // const { result } = renderHook(() => useHookName())
    // expect(result.current.value).toBe(...)
  })

  it('updates state through the public API', () => {
    // const { result } = renderHook(() => useHookName())
    // act(() => result.current.setValue(...))
    // expect(result.current.value).toBe(...)
  })

  it('handles async success or failure', async () => {
    // const { result } = renderHook(() => useHookName())
    // await waitFor(() => expect(result.current.isLoading).toBe(false))
    // expect(result.current.error).toBeUndefined()
  })
})
